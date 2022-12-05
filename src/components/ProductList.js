import React from 'react';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Products from '../data/products_data';

const ProductList = () => {
return (
<Container>
<Row>
    <h5>Featured Products</h5>
{
Products.map((product, id) => (
<Col xs={6} md={3} key={id}>
<Card  >
<Image src={product.imageUrl} height='180' />
<Card.Body>
<Card.Title>{product.name}</Card.Title>
<Card.Text> <del>${product.was}</del> {``} {product.price}</Card.Text>
<Button variant="danger" size='sm' >Add to Cart</Button>
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




