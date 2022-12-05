import React from 'react'
import { Card, Container, Row, Col} from 'react-bootstrap';
import { Quote } from 'react-bootstrap-icons';

export default function Feedback() {
  return (
    <Container>
    <h5> Your Feedbacks</h5>
    <Row>
      <Col xs={12} md={4} >
    <Card className="text-center" border="warning" >
        <Card.Header> <Quote /> </Card.Header>
        <Card.Body>
          <Card.Title>Mohammed Ali</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    
    </Container>
  )
}
