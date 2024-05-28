import React, { useContext, useEffect, useState } from 'react';
import img4 from '../assets/images/profile.jpeg';
import { Link } from 'react-router-dom';
import { Button,Card,Col,Container,Form ,Row,InputGroup} from "react-bootstrap";
import { FaUser, FaUsers } from "react-icons/fa";
import { MdEmail, MdOutlineDeleteOutline } from "react-icons/md";
import { TbHelpHexagonFilled, TbHexagonLetterUFilled } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import { CiSearch, CiUser } from 'react-icons/ci';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { IoBagCheckSharp, IoBagHandle } from 'react-icons/io5';
import Profile_header from './profile-header';
import { AuthContext } from './AuthContext';
import { GoLocation } from 'react-icons/go';
import { LuUsers } from 'react-icons/lu';



export default function Profile() {

  const { user } = useContext(AuthContext);
  const [email , setEmail] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address , setAddress] = useState();
  const [phone , setPhone] = useState();
  const [position , setPosition] = useState();

  useEffect(() => {
    setEmail(user.email);
    const [first, last] = user.name.split(' ');
    setFirstName(first);
    setLastName(last);
    setAddress(user.address);
    setPhone(user.phone);
    setPosition(user.position);
  }, [user]);
  
  function handleInputChange(setter) {
    return function(e) {
      setter(e.target.value);
    };
  }
  
  const handleEmailChange = handleInputChange(setEmail);
  const handleAddressChange = handleInputChange(setAddress);
  const handlePositionChange = handleInputChange(setPosition);
  const handleFirstNameChange = handleInputChange(setFirstName);
  const handleLastNameChange = handleInputChange(setLastName);

  const fullname = firstName +" "+ lastName;
  
  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  return (
    <>  
    <Profile_header title={fullname}/>
    <Container>
      <Row>
            <div className='pt-2 text-md-start text-sm-center text-center'>
                <h2>My Profile</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>  
        <Col md={3} className='p-2'>
        <div className="p-3 Profile_Side_bar border_radias">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link active btn btn-primary radius text-start text-white" to="/profile">
                    <FaUser /> Personal Information
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link  btn btn-primary radius text-start text-dark" href="#">
                    <IoBagCheckSharp /> Space Information
                  </Link> 
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" to="/emplist">
                    <LuUsers /> Employees
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" href="#">
                    <FaUsers /> Customers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" to="/search">
                    <GoLocation /> Change Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" href="#">
                    <RiLockPasswordLine /> Change Password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark btn btn-primary radius text-start" href="#">
                    <AiOutlineUserDelete /> Delete Account
                  </Link>
                </li>
              </ul>
            </div>
        </Col>

        <Col className="wlc_card align-content-center" md={9}> 
            <Card className="p-4 main_card border_radias">

                    <h4 className="container"> <strong><CiUser className='mb-1'/> Personal Information</strong> </h4>
                        <div className='d-flex flex-wrap product_card_body_div pt-2'>
                            <div className='col-sm-4 pl-0 pr-0 text-center rounded-circle Product_imag_profile'>
                                <img src={img4} className="w-100 h-100  rounded-circle object-fit-cover rounded"/>
                            </div>
                            <div className="card-body col-sm-8">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="card-title Prof_name" >{firstName} {lastName}</h4>
                                </div>
                                <p className="card-text p-0 m-0 Prof_compnay_name">Bank of America</p> <br/>
                                <div className='Profile_button_div'>
                                    <a href="#" className="btn btn-light btn-outline-primary border_radias"><MdOutlineDeleteOutline /> Change</a>
                                    <a href="#" className="btn btn-light btn-outline-primary border_radias ml-2"><CiUser/> Remove</a>
                                </div>
                            </div>
                        </div>

              <Form >
                <div className="d-flex flex-wrap pt-2">
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>First Name</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <FaUser />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="fname" placeholder="Enter your First Name" id="firstname" value={firstName} onChange={handleFirstNameChange}   />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Last Name</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <FaUser />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="lname" placeholder="Enter your Last Name" id="lastname" value={lastName} onChange={handleLastNameChange} />
                      </InputGroup>
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
                        <Form.Control className="radius" type="email" placeholder="Enter your Email" id="email"  value={email}
                          onChange={handleEmailChange}  />
                      </InputGroup>
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
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </Form.Group> 
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Company Name</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                           <IoBagHandle />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="company" placeholder="Enter your Company Name" id="company"   />
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Designation</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                        <TbHexagonLetterUFilled />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="desingnation" placeholder="Enter your Designation" id="designation" value={position}  onChange={handlePositionChange}  />
                      </InputGroup>
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
                        value={address}
                        placeholder="Enter your workspace Address"
                        onChange={handleAddressChange}
                      />
                    </Form.Group>
                  </Col>
                </div>
                <div className="container text-end">
                    <Button className="Submit_button p-2" variant="primary" >
                      Update
                    </Button>
                </div>
              </Form>
            </Card>
          </Col>
      </Row>
    </Container>
    </>
  );
}
