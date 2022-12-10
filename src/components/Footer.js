import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import Copyright from './Copyright';
import '../styles/Footer.css'
import ScrolltoTopButton from './ScrolltoTopButton';


export default function Footer() {

  return (

    <div className='Footer'>

    <Container >
    <Row>
    <h6>Give us your feedback/comment</h6>
    <Col xs={12} md={8}>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter phone" />
        <Form.Text className="text-muted">
          We'll never share your number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="your name" />
      </Form.Group>
    
      <Button variant="warning"  type="submit">
        Submit
      </Button>
    </Form>
    </Col>

    <Col xs={12} md={4}>

      <div className = "socials">
      <Facebook size={25} color= 'blue' className='icon' />
      <Instagram size={25} color= 'red'className='icon'  />
      <Twitter size={25} color= 'blue' className='icon' />
      <Youtube size={25}  color= 'red' className='icon' />
      <ScrolltoTopButton />
      </div>

     
    </Col>
  </Row>

  <hr/>

  <Copyright />

  </Container>
  </div>
  )
}

