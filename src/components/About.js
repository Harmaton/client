import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../styles/About.css'

function About() {
  return (
   
    <Card className="text-center" bg="warning" >
      <Card.Header>Who are we</Card.Header>
      <Card.Body>
        
      <Row>

      <Col md={6} xs = {12}>
        <Card.Title> <b>Mission</b> </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        </Col>

        <hr />

        <Col md={6} xs = {12}>
        <Card.Title> <b>Vision</b> </Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        </Col>
       </Row>
      </Card.Body>
    </Card>
  )
}

export default About