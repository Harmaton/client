import React from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { CartFill } from 'react-bootstrap-icons';
import Products from '../data/products_data';
import '../styles/ProductList.css';

const ProductList = () => {
return (
<div className='Products'>
<Row>
    <h5 className = "header" >Best Selling Products</h5>
{
Products.map((product, id) => (
<Col xs={6} md={3} key={id}  className="item" >
<Card className="card" >
<Image src={product.imageUrl} height='180' />

<Card.Body className="body">

    <Card.Title className = "title">{product.name}</Card.Title>
    <del className="del">Ksh {product.was}</del>
   <Card.Text className="price">Ksh {product.price}</Card.Text>
    
    <Button variant="danger" size='sm' className="button" > 
    Add to Cart <CartFill /> </Button>
    




</Card.Body>
</Card>
</Col>
))
}
</Row>
</div>
);
}

export default ProductList;




