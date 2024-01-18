import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  let day = new Date();
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={12} className='text-center'>
              <p>&copy; {day.getFullYear()} lakeSide Hotel</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer