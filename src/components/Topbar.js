import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import { Row, Col } from 'react-bootstrap';
import '../styles/TopBar.css'
import SingleCategory from './SingleCategory';

export default function Topbar() {

  const categories = [
   {
  
   },
  ];
  return (
    <>
    <div >
    <Container >
       
    <Row>
    
    <Col className="carousel" xs={12} md={8}>
    <Carousel fade >
      <Carousel.Item interval={1000} style = {{height: 500}}>
        <img
          className="d-block w-100"
          src="\images\water purifier.jpg"
          alt=""
          height="500"
        />
        <Carousel.Caption>
          <h3>Water Purifier</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} style = {{height: 500}}>
        <img
          className="d-block w-100"
          src="\images\water atm.jpg"
          alt="Second slide"
          height = "500"
        />

        <Carousel.Caption>
          <h3>Water ATM machine</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000} style = {{height: 500}}>
        <img
          className="d-block w-100"
          src="\images\puri.jpg"
          alt="Third slide"
          height = "500"
        />

        <Carousel.Caption>
          <h3>Purifiers</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Col>

    <Col xs={12} md={4} className="categories">
       <h4 className="header">Categories</h4>
       <SingleCategory />
       
    </Col>

  </Row>
   
    </Container>
    </div>
    </>
  )
}
