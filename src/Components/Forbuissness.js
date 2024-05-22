import { Button,Card,Col,Container,Form,Image,Row,InputGroup} from "react-bootstrap";
import img1 from "../assets/images/office.jpg";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbHelpHexagonFilled } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { useFormik } from "formik";
import * as yup from 'yup';
import Navbar from "./Navbar";
import Footer from "./Footer";

  const initialValues = {
    name : "",
    position: "",
    phone:"",
    email: "",
    address: "",
  }
  
export default function Forbuissness() {

  const schema = yup.object().shape({
    name: yup.string().trim().required(),
    position: yup.string().trim().required(),
    phone: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    address: yup.string().trim().required(),
  });

  const Formik = useFormik({
    initialValues : initialValues,
    validationSchema: schema,  
    onSubmit : (value,{resetForm}) => {
        console.log(value);

        resetForm();
    }
  })

//  console.log(Formik);  
  
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row className="">
          <Col className="p-4 wlc_card align-content-center" sm={12} md={12} lg={6}>
            <Card className="p-4 main_card">
              <h2 className="container"> <strong>Connect with our partnerships team</strong> </h2>
              <p className="container"> We're always looking to work with the best spaces around the world. </p>
              <Form onSubmit={Formik.handleSubmit} >
                <div className="d-flex flex-wrap">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Name</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <FaUser />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="name" placeholder="Enter your name" id="name" value={Formik.values.name} onChange={Formik.handleChange} />
                      </InputGroup>
                      <p className="Error_Msg">{Formik.errors.name}</p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Position</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <TbHelpHexagonFilled />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="position" placeholder="Enter your position" id="position" value={Formik.values.position} onChange={Formik.handleChange} />
                      </InputGroup>
                      <p className="Error_Msg">{Formik.errors.position}</p>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Email</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <MdEmail />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="email" placeholder="Enter your email" id="email" value={Formik.values.email} onChange={Formik.handleChange}  />
                      </InputGroup>
                      <p className="Error_Msg">{Formik.errors.email}</p>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Phone</strong>
                      </Form.Label>
                      <PhoneInput
                        country={"in"}
                        id="phone"
                        value={Formik.values.phone}
                        onChange={(value) => Formik.setFieldValue("phone", value)}
                      />
                        <p className="Error_Msg">{Formik.errors.phone}</p>
                        
                    </Form.Group> 
                  </Col>
    
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Address</strong>
                      </Form.Label>
                      <Form.Control
                        className="radius"
                        as="textarea"
                        type="address"
                        id="address"
                        placeholder="Enter your workspace address"
                       value={Formik.values.address}
                       onChange={Formik.handleChange} 
                      />
                    <p className="Error_Msg">{Formik.errors.address}</p>
                    </Form.Group>
                  </Col>
                </div>
                <div className="container">
                    <Button className="Submit_button w-100 p-2" variant="primary" type="submit"  disabled={!Formik.isValid}>
                      Contact for create a workspaces
                    </Button>
                </div>
              </Form>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={6} className="h-100 image_main">
            <Image className="Bus_img" src={img1} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
