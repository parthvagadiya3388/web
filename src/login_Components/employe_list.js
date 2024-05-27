import React, { useState } from 'react'
import { Button,Card,Col,Container,Form ,Row,InputGroup, Modal} from "react-bootstrap";
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { IoBagCheckSharp, IoBagHandle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaEye, FaUser, FaUserShield, FaUsers } from "react-icons/fa";
import { MdDeleteForever, MdEmail, MdOutlineDeleteOutline } from "react-icons/md";
import img4 from '../assets/images/profile.jpeg';
import Profile_header from './profile-header';
import { LuUsers } from 'react-icons/lu';
import { GoLocation } from 'react-icons/go';
import { TiEdit } from 'react-icons/ti';
import { FiLock, FiMail } from 'react-icons/fi';
import { TbHelpHexagonFilled } from 'react-icons/tb';
import PhoneInput from 'react-phone-input-2';

const employees = [
    {
      userName: "Cameron Williamson",
      userEmail: "cameronwilliamsona@gmail.com",
      position: "Nursing Assistant"
    },
    {
      userName: "Brooklyn Simmons",
      userEmail: "brooklynsimmons@gmail.com",
      position: "President of Sales"
    },
    {
      userName: "Jenny Wilson",
      userEmail: "jennywilson@gmail.com",
      position: "Medical Assistant"
    },
    {
      userName: "Jacob Jones",
      userEmail: "jacobjones@gmail.com",
      position: "Web Designer"
    },
    {
      userName: "Wade Warren",
      userEmail: "wadewarren@gmail.com",
      position: "President of Sales"
    },
    {
      userName: "Savannah Nguyen",
      userEmail: "savannahnguyen@gmail.com",
      position: "Nursing Assistant"
    },
    {
      userName: "Cody Fisher",
      userEmail: "codyfisher@gmail.com",
      position: "Dog Trainer"
    },
    {
      userName: "Leslie Alexander",
      userEmail: "lesliealexander@gmail.com",
      position: "Medical Assistant"
    },
    {
      userName: "Ralph Edwards",
      userEmail: "ralphedwards@gmail.com",
      position: "Web Designer"
    }
  ];
  
export default function Employe_list() {

  const [show, setShow] = useState(false);
  const handleClose= () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>  
    <Profile_header/>

    <Modal show={show}>
        <Card className="p-4 togl_card">
          <div className="d-flex">
              <Col md={10} className="p-0">
                <h2><strong>Add Employees</strong></h2>
              </Col>
              <Col md={2} className="text-end">
                <button type="button" className="btn-close toggle_button m-2 ml-2" onClick={handleClose}></button>
              </Col>
          </div>
          <p>Lorem ipsum dolor sit amet.</p> <hr className='text-primary' />

            <Form>
                <div className='d-flex flex-wrap'>

                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Name</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <FaUser />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="name" placeholder="Enter your name" id="name"/>
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Email</strong>
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text className="radius">
                          <MdEmail />
                        </InputGroup.Text>
                        <Form.Control className="radius" type="email" placeholder="Enter your email" id="email" />
                      </InputGroup>
                    </Form.Group>
                  </Col>  

                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Phone</strong>
                      </Form.Label>
                      <PhoneInput
                        country={"in"}
                        id="phone"
                      />
                        
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
                        <Form.Control className="radius" type="position" placeholder="Enter your position" id="position" />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <strong>Accesss</strong>
                      </Form.Label>
                            <select className="form-select radius">
                                <option value="Give a access" selected>Give a access</option>
                                <option value="access" >Access</option>
                                <option value="denied" >Denied</option>
                            </select>
                    </Form.Group>
                  </Col>

                </div>
      
            </Form><br />

          <div className='d-flex justify-content-end'>
              <Button className="Submit_button btn btn-outline-primary" variant='light' type="submit"> Cencel </Button>
              <Button className="Submit_button ml-2" variant="primary" type="submit"> Add Employee </Button>
          </div>

        </Card>
      </Modal>

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
                            <Link className="nav-link  btn btn-primary radius text-start text-dark" to="/profile">
                            <FaUser /> Personal Information
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  btn btn-primary radius text-start text-dark" href="#">
                            <IoBagCheckSharp /> Space Information
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-dark btn btn-primary radius text-start text-white" href="#">
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
                        <Card className="p-4 main_card List_card">
                                <div className='d-flex justify-content-between flex-wrap'>
                                    <Col md={5} sm={12} className='Employr_title'>
                                    <h4 className=''><FaUserShield /> Employees</h4>
                                    </Col>
                                    <Col md={7} sm={12} className='d-flex justify-content-between flex-wrap w-100'>
                                        <div className="form-group has-search Input_button_emp">
                                          <span className="fa fa-search form-control-feedback"></span>
                                          <input type="text" className="form-control" placeholder="Search Employee..."/>
                                        </div>   
                                        <Button className='border_radias form-control Input_button_emp' onClick={handleShow}>Add Employee</Button>
                                    </Col>
                                </div>
                                <br />
                                <div className="table-responsive">
                                    <table className="table table-hover w-100 table_Div" border="1">
                                      {/* <thead className="thead-light"> */}
                                        <tr className='Table_header'>
                                          <th>User Name</th>
                                          <th>User Email</th>
                                          <th>Position</th>
                                          <th>Action</th>
                                        </tr>
                                      {/* </thead> */}
                                      <tbody>
                                        {employees.map((employ, index) => (
                                          <tr key={index}>
                                            <td>{employ.userName}</td>
                                            <td>{employ.userEmail}</td>
                                            <td>{employ.position}</td>
                                            <td>
                                              <button className="me-2 border-0 bg-transparent"><FaEye /></button>
                                              <button className="me-2 border-0 bg-transparent"><TiEdit /></button>
                                              <button className="me-2 border-0 bg-transparent"><MdDeleteForever /></button>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>      
                        </Card>
                    </Col>
      </Row>
    </Container>
    </>
  )
}
