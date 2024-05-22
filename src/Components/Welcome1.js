import React from "react";
import { Button, Card, Col, Container, Form, Image, Row, InputGroup } from "react-bootstrap";
import { FiMail, FiLock } from 'react-icons/fi'; 
import img1 from '../assets/images/cofee.jpg';
import { Link } from "react-router-dom";

export default function Welcome1() {
  return (
    <>
      <Container fluid>
        <Row className="">
          <Col className="p-4 wlc_card" sm={12} md={12} lg={5}>
            <Card className="p-4 main_card">
              <h2><strong>Welcome Back</strong></h2>
              <p>Please Enter Your Details</p>
              <div className="d-flex">
                <Button className="col-6 button bg-light text-dark Submit_button border-0 btn-outline-primary"><label className="w-100 h-100 mt-1 bussines_button"><input type="radio" name="for" /> For Business</label> </Button>
                <Button className="col-6 button ml-1 bg-light text-dark Submit_button border-0"><label className="w-100 h-100 mt-1 enq_button"><input type="radio" name="for" /> For Enquiry</label></Button>
              </div>
              <br />
              <Form className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><strong>Email</strong></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FiMail /></InputGroup.Text> 
                    <Form.Control type="email" placeholder="Enter email" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><strong>Password</strong></Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FiLock /></InputGroup.Text> 
                    <Form.Control type="password" placeholder="Password" />
                  </InputGroup>
                </Form.Group>
              </Form>
              <Link to="/profile">  
                  <Button className="Submit_button w-100" variant="primary" type="submit">
                  Gate Access
                  </Button>
              </Link>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={7} className="h-100 image_main">
            <Image className="Wel_img" src={img1}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
