import React, { useEffect, useState } from 'react'
import ProductCard from './product_card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Products = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialProduct = [{ ProId: 1, ProTitle: "hello", ProImage: "./product.jpg", ProDescription: "The best dumbbells on the enternet.", ProPrice: "500" },
    { ProId: 2, ProTitle: "Hi", ProImage: "./product.jpg", ProDescription: "The best dumbbells on the enternet.", ProPrice: "900" },
    { ProId: 3, ProTitle: "Hi", ProImage: "./product.jpg", ProDescription: "The besadft dadumbbells on the enternet.", ProPrice: "900" },
    { ProId: 4, ProTitle: "Hi", ProImage: "./product.jpg", ProDescription: "The best dumbbfadffaells on the enternet.", ProPrice: "900" },
    { ProId: 5, ProTitle: "Hi", ProImage: "./product.jpg", ProDescription: "The best dumbbeladdfls on the enternet.", ProPrice: "900" }
    ]

    const [products, setProducts] = useState(initialProduct);


    const [productName, setProductName] = useState("");
    // const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDescription, setProductDescription] = useState("");


    const { REACT_APP_REST } = process.env;

    const [file, setFile] = useState([]);


    const AddItem = (e) => {
        e.preventDefault();
        const product = products;
        product.slice()
        setProducts([...products, { ProId: Math.random(), ProTitle: productName, ProImage: file, ProDescription: productDescription, ProPrice: productPrice }])
        console.log(products);
    }

    const VerifyName = (e) => {
        const { value } = e.target;
        setProductName(value)
    };
    // const VerifyImage = (e) => {
    //     const { value } = e.target;
    //     setProductImage(value)
    // };

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
        setProductPrice(value)
    };
    const VerifyDescription = (e) => {
        const { value } = e.target;
        setProductDescription(value)
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(productName, productImage, productPrice, productDescription);
    // };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    
// useEffect(()=>{},[products,setProducts,DeleteProduct])
        console.log(products)
    return (
        <>
            <div className="container p-3">
               {products && products.length >0 && <Carousel responsive={responsive}>
                    
                    {
                        products.map((obj,i) => {
                            return (
                                <ProductCard
                                    ProTitle={obj.ProTitle}
                                    ProImage={obj.ProImage}
                                    ProDescription={obj.ProDescription}
                                    ProPrice={obj.ProPrice} 
                                    ProId={obj.ProId}
                                    products={products }
                                    setProducts={setProducts}
                                    i={i}
                                    />)
                        })
                    }
                </Carousel>}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={AddItem}>
                            <div className="form-group">
                                <label htmlFor="productName">Product Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    onChange={(e) => VerifyName(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productImage">Product Image:</label>
                                <Form.Control
                                    type="file"
                                    required="required"
                                    onChange={handleFile}
                                // onChange={(e) => VerifyImage(e)}
                                ></Form.Control>
                            </div>
                            <div className="form-group">
                                <label htmlFor="productPrice">Product Price:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="productPrice"
                                    onChange={(e) => VerifyPrice(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productDescription">Product Description:</label>
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    id="productDescription"
                                    onChange={(e) => VerifyDescription(e)}
                                ></textarea>
                            </div>
                            <div className="form-group d-flex justify-content-center ">
                                <Button variant="secondary" className='m-2' onClick={handleClose}>Close</Button>
                                <Button variant="primary" className='m-2' type="submit" onClick={handleClose} >Add</Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                <Button className='m-2' onClick={handleShow}>Add Item</Button>
            </div >
        </>
    )
}

export default Products