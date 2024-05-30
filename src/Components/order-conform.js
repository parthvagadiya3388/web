import React, { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import img4 from "../assets/images/asset 10.jpeg";
import Profile_header from "../login_Components/profile-header";
import Payment_Card from "./payment-card";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Productcard from "./product-card";
import { ProductContext } from "../login_Components/ProductContext";

export default function Order_Conform() {

  const { selectedProduct } = useContext(ProductContext);

  if (!selectedProduct) {
    return (
      <Container>
        <Row>
          <Col>
            <p>Loading...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <Profile_header />
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
              <Productcard image={selectedProduct.image} title={selectedProduct.title} location={selectedProduct.location} rating={selectedProduct.rating} price={selectedProduct.price} showButton={false} cardbackside={true} ratingShow={false}/>
            </div>
          </Col>

          <Col sm={12} md={12} lg={5}>
            <div className="w-100 h-auto">
              <Payment_Card location={selectedProduct.location} />
            </div>
          </Col>

        </Row>
      </Container>
    </>
  );
}
