import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProductCard = ({ ProImage, ProTitle, ProDescription, ProPrice, ProId ,setProducts,products}) => {
  
// Delete
const DeleteProduct = (ProId) => {
    // const newProd=products.filter((prod)=>prod.ProId!==ProId)
    const newProd=products.slice()
    setProducts(newProd)
    } 

    return (
        <>
            <Card style={{ minWidth: '18rem', maxWidth: '18rem', minHeight: '35rem', maxHeight: '18rem' }} className='mx-2'>
                <Card.Img variant="top" src={ProImage} />
                <Card.Body style={{ minWidth: '18rem', maxWidth: '18rem' }}>
                    <Card.Title>{ProTitle}</Card.Title>
                    <Card.Text>
                        {ProDescription}
                    </Card.Text>
                    <Card.Text>
                        ₹{ProPrice}
                    </Card.Text>
                    <div className="d-flex justify-content-between" >
                        {/* <Button variant="warning" className='col-5' style={{ fontSize: "12px"}}>Buy Now</Button> */}
                        {/* onClick={EditProduct} */}
                        <FontAwesomeIcon icon={faPenToSquare} beat size="2xl" />
                        <FontAwesomeIcon icon={faTrash} beat size="2xl" style={{ color: "#ff0000", }} onClick={() => DeleteProduct(ProId)} />
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}


export default ProductCard