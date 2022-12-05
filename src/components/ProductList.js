import React from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { CartFill } from 'react-bootstrap-icons';
import Products from '../data/products_data';
import '../styles/ProductList.css';

const ProductList = () => {
return (
<Container className = "Products">
<Row>
    <h5 className = "header" >Featured Products</h5>
{
Products.map((product, id) => (
<Col xs={6} md={3} key={id}  className="item" >
<Card className="card" >
<Image src={product.imageUrl} height='180' />
<Card.Body>
<Card.Title>{product.name}</Card.Title>
<Card.Text> <del>${product.was}</del> {``} {product.price}</Card.Text>
<Button variant="danger" size='sm' > Add to Cart <CartFill /> </Button>
</Card.Body>
</Card>
</Col>
))
}
</Row>
</Container>
);
}

export default ProductList;




