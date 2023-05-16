import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'react-multi-carousel/lib/styles.css';


const ProductCard = ({ ProImage, ProTitle, ProDescription, ProPrice, ProId, setProducts, products, i }) => {
    const [selectedId, setSelectedId] = useState()
    // Delete
    const DeleteProduct = (ProId, i) => {
        // const newProd=products.filter((prod)=>prod.ProId!==ProId)
        // console.log(newProd);
        const newProd = products.slice(0, i).concat(products.slice(i + 1));
        setProducts(newProd);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const { REACT_APP_REST } = process.env;
    const [file, setFile] = useState([]);


    const [proName, setProName] = useState("");
    const [proPrice, setProPrice] = useState("");
    const [proDescription, setProDescription] = useState("");

    const VerifyName = (e) => {
        const { value } = e.target;
        setProName(value)
    };

    const handleFile = event => {
        setFile(
            URL.createObjectURL(event.target.files[0])
        );
        const formData = new FormData();
        formData.append("fileupload", event.target.files[0]);

        fetch(REACT_APP_REST + "/product/upload", {
            method: 'POST',

            body: formData,
            dataType: "jsonp"
        })
    };

    const VerifyPrice = (e) => {
        const { value } = e.target;
        setProPrice(value)
    };
    const VerifyDescription = (e) => {
        const { value } = e.target;
        setProDescription(value)
    };








    // Edit
    const EditProduct = (i) => {
        setSelectedId(i)
        handleShow();
    }
    const UpdateItem = (e) => {
        e.preventDefault()
        const prod = products
        const newData = prod.map((obj, i) => {

            if (i === selectedId) {
               
                    obj.ProDescription=proDescription;
                   obj.ProPrice=ProPrice;
                    obj.ProTitle= proName;
                }

                return {...obj}
        }
        )
        setProducts(newData)
    }

    return (
        <>
            <Card style={{ minWidth: '18rem', maxWidth: '18rem', minHeight: '35rem', maxHeight: '18rem' }} className='mx-2'>
                <Card.Img variant="top" src={ProImage} />
                <Card.Body style={{ minWidth: '18rem', maxWidth: '18rem' }}>
                    <Card.Title>{ProTitle} {i}</Card.Title>
                    <Card.Text>
                        {ProDescription}
                    </Card.Text>
                    <Card.Text>
                        ₹{ProPrice}
                    </Card.Text>
                    <div className="d-flex justify-content-between" >
                        {/* <Button variant="warning" className='col-5' style={{ fontSize: "12px"}}>Buy Now</Button> */}
                        {/* onClick={EditProduct} */}
                        <FontAwesomeIcon icon={faPenToSquare} beat size="2xl" onClick={() => EditProduct(ProId, i)} />
                        <FontAwesomeIcon icon={faTrash} beat size="2xl" style={{ color: "#ff0000", }} onClick={() => DeleteProduct(ProId, i)} />
                    </div>
                </Card.Body>
            </Card>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => UpdateItem(e)}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productName"
                                defaultValue={products[i].ProTitle}
                                onChange={(e) => VerifyName(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productImage">Product Image:</label>
                            <Form.Control
                                type="file"
                                // required="required"
                                filename={products[i].ProImage}
                                onChange={handleFile}
                            ></Form.Control>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Product Price:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="productPrice"
                                defaultValue={products[i].ProPrice}
                                onChange={(e) => VerifyPrice(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productDescription">Product Description:</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                id="productDescription"
                                defaultValue={products[i].ProDescription}
                                onChange={(e) => VerifyDescription(e)}
                            ></textarea>
                        </div>
                        <div className="form-group d-flex justify-content-center ">
                            <Button variant="secondary" className='m-2' onClick={handleClose}>Close</Button>
                            <Button variant="primary" className='m-2' type="submit"  >Update</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    )
}


export default ProductCard