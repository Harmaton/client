import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SingleCategory() {

    const handleClick = () => {
      alert('yes sir');
    }
    

  return (
    <div>
        <Row>
            <Col>
           

    <ListGroup as="ol" numbered>

      <ListGroup.Item
      action onClick={handleClick}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Atm's</div>
        </div>
        <Badge bg="danger" pill>
          2
        </Badge>
      </ListGroup.Item>


      <ListGroup.Item
      action onClick={handleClick}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Kitchen ware</div>
        </div>
        <Badge bg="danger" pill>
          5
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
      action onClick={handleClick}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Pasteurizers</div>
        </div>
        <Badge bg="danger" pill>
          2
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
      action onClick={handleClick}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold"> Reverse Osmosis System</div>
        </div>
        <Badge bg="danger" pill>
          2
        </Badge>
      </ListGroup.Item>

      <ListGroup.Item
      action onClick={handleClick}
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Water Vending Machines</div>
        </div>
        <Badge bg="danger" pill>
          2
        </Badge>
      </ListGroup.Item>

    </ListGroup>
            </Col>
        </Row>
    </div>
  )
}
