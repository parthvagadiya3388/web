import { Button,Card,Col,Container,Form,Image,Row,InputGroup} from "react-bootstrap";
import img1 from "../assets/images/workimg.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ForWorkSpace() {

    // const [change , setChange] = useState();

  return (
    <div> 
      <Navbar />
      <Container fluid>
        <Row className="">
          <Col className="p-4 wlc_card align-content-center" sm={12} md={12} lg={6}>
            <Card className="p-4 main_card">
              <h2 className="container text-center"> <strong>For Business</strong> </h2>
              <p className="container text-center"> If you want to work together with us then join us. </p>

              <Link className="text-center" to="/yourCostomer"><Button className="Submit_button btn-outline-primary bg-light m-auto Work_button">For your Customers </Button> </Link> <br/>
              <Link className="text-center" to="/yourEmployee"><Button className="Submit_button m-auto Work_button">For your Employees </Button> </Link>

            </Card>
          </Col>
          <Col sm={12} md={12} lg={6} className="h-100 image_main">
            <Image className="Bus_img" src={img1} />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

