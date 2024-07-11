import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';

const ContactDetail = () => {
  return (
    <> 
       <Navbar/>
    <Container className="mt-5 text-center mb-4 p-6">
      <h2>Contact Us</h2>
      <Form>
        <Row className="mb-3 ">
          <Col>
            <Form.Group controlId="formName">
          
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formPhone">
           
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formEmail">
       
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="formMessage">
          
              <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="warning" type="submit">
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
    </>

  );
};

export default ContactDetail;
