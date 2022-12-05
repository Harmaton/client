import React from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import Copyright from './Copyright';



export default function Footer() {

  return (

    <Container background = "dark">
    <Row>

    <Col xs={12} md={8}>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
    </Col>

    <Col xs={12} md={4}>

      <div className = "socials">
      <Facebook size={25} />
      <Instagram size={25} />
      <Twitter size={25} />
      <Youtube size={25} />
      </div>
     


    </Col>
  </Row>

  <br/>

  <Copyright />

  </Container>

  )
}

