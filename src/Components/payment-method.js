import React, { useState } from "react";
import Profile_header from "../login_Components/profile-header";
import Payment_Card from "./payment-card";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button,Card,Col,Container,Form,Image,Row,InputGroup} from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

export default function Payment_method() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('CreditCard');

  return (
    <>
      <Profile_header title="Tony Patel" />
      <Container>
        <Row>
          <Col className="wlc_card" sm={12} md={12} lg={7}>
            <Link to="/order">
              <Button className="btn btn-light btn-outline-dark Back_button">
                <IoIosArrowBack /> Back
              </Button>
            </Link>
            <h4 className="pb-2">
              <strong>Payment method</strong>
            </h4>
            <p>Lorem ipsum, dolor sit amet consectetur.</p>

            <hr />

            <Button className="w-100 border_radias text-start text-dark border-1 bg-light" onClick={() => setSelectedPaymentMethod('PayPal')}>
              <label className="w-100 h-100 m-0 p-0">
                <input
                  type="radio"
                  name="pay"
                  checked={selectedPaymentMethod === 'PayPal'}
                  readOnly
                />
                <strong> PayPal</strong>
              </label>
            </Button>
            <Button
              className="w-100 border_radias text-start text-dark mt-2 Card_Credit border-0"
              onClick={() => setSelectedPaymentMethod('CreditCard')}
            >
              <label className="w-100 h-100 m-0 p-0">
                <input
                  type="radio"
                  name="pay"
                  checked={selectedPaymentMethod === 'CreditCard'}
                  readOnly
                />
                <strong> Credit/Debit Card</strong>
              </label>
            </Button>

            {selectedPaymentMethod === 'CreditCard' && (
              <Card className="border_radias p-3 Card_Credit border-0">
                          <Form >
                                <div className="d-flex flex-wrap">
                                <Col md={12}>
                                    <Form.Group className="mb-3">
                                    <Form.Label>
                                       Card user name*
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control className="radius" type="name" placeholder="Enter your card user name" id="cardusername"  />
                                    </InputGroup>
                                    </Form.Group>
                                </Col>
                                
                                <Col md={12}>
                                    <Form.Group className="mb-3">
                                    <Form.Label>
                                        Card number*
                                    </Form.Label>
                                    <InputGroup>
                                        <Form.Control className="radius" type="name" placeholder="Enter your card number" id="cardnumber"  />
                                    </InputGroup>
                                    </Form.Group>
                                </Col>
                                
                                <Col md={3}>
                                    <Form.Group className="mb-3">
                                    <Form.Label>
                                        Expiration date*
                                    </Form.Label>
                                    <Form.Control
                                        className="radius"
                                        placeholder="00/00"
                                    />
                                    </Form.Group>
                                </Col>

                                <Col md={3}>
                                    <Form.Group className="mb-3">
                                    <Form.Label>
                                       CVD code*
                                    </Form.Label>
                                    <Form.Control
                                        className="radius"
                                        placeholder="000"
                                    />
                                    </Form.Group>
                                </Col>
                                </div>
                               
                            </Form>
              </Card>
            )}
            
          </Col>

          <Col sm={12} md={12} lg={5}>
            <div className="w-100 h-auto">
              <Payment_Card />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
