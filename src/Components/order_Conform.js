import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img4 from "../assets/images/asset 10.jpeg";
import Profile_header from "../login_Components/profile_header";
import Payment_Card from "./payment_Card";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function Order_Conform() {
  return (
    <>
      <Profile_header title="Tony Patel" />
      <Container>
        <Row>
          <Col className="wlc_card" sm={12} md={12} lg={7}>
          <Link to="/search"><Button className='btn btn-light btn-outline-dark Back_button'><IoIosArrowBack /> Back</Button></Link>
                <h4 className="pb-2">
                <strong> Order confirmation</strong>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur.</p>

            <hr />

            <div className="card mt-2 border_radias p-2">
              <div className="d-flex flex-wrap product_card_body_div">
                <div className="col-sm-4 pl-0 pr-0 bg-black Product_imag_div">
                  <img
                    src={img4}
                    className="w-100 h-100 object-fit-cover product_image"
                  />
                </div>
                <div className="card-body col-sm-8">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Carrer de Pallars, 194</h5>
                  </div>
                  <p className="card-text p-0 m-0">
                    Barcelona, Barcelona 08005
                  </p>
                  <p className="badge bg-warning text-white">4.5 ★</p>
                  <span>(12k Ratings)</span>
                  <div className="d-flex justify-content-between">
                        <h6 className="p-0">
                            <strong className="p-0">19.00 USD</strong>
                        </h6>
                        <button className="border-0 text-danger Payment_delet_button"><MdDelete /></button>
                  </div>
                </div>
              </div>
            </div>
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
