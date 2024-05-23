import React, { useState } from 'react';
import { Button, Col, Container, Offcanvas, Row, ListGroup } from 'react-bootstrap';
import { FaCaretDown, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import img4 from '../assets/images/profile.jpeg'; // Replace this with your actual image path

export default function ProfileHeader(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row className="align-items-center d-flex flex-wrap pt-2">
          <Col xs={6}>
            <h4 className="d-inline-block">
            <NavLink className="navbar-brand" to="/Welcome">
              <strong>
                <i className="fa-solid fa-film"></i> BusinessPass
              </strong>
            </NavLink>
            </h4>
          </Col>
          <Col xs={6} className="text-end d-flex justify-content-end align-items-center p-0">
            <img src={img4} alt="Profile" className="rounded-circle" width="40" />
            <span className="ms-1 me-0">{props.title}</span>
            <Button className='bg-white text-dark border-0' onClick={handleShow}>
              <FaCaretDown />
            </Button>
          </Col>
        </Row>

        <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <hr />
            <div className="text-center mb-4">
              <img src={img4} alt="Profile" className="rounded-circle" width="60" />
              <p>Carrer de Pallars, 194</p>
            </div> <hr />
            <ListGroup variant="flush">
              <ListGroup.Item action className='listGroup_profile text-primary'>
                Personal Information <FaCaretDown className="float-end" />
              </ListGroup.Item>
              <ListGroup.Item action>
                Space Information <FaCaretDown className="float-end" />
              </ListGroup.Item>
              <ListGroup.Item action>
                Customers <FaCaretDown className="float-end" />
              </ListGroup.Item>
              <ListGroup.Item action>
                Change Location <FaCaretDown className="float-end" />
              </ListGroup.Item>
              <ListGroup.Item action>
                Change Password <FaCaretDown className="float-end" />
              </ListGroup.Item>
              <ListGroup.Item action>
                Delete Account <FaCaretDown className="float-end" />
              </ListGroup.Item>
            </ListGroup> <hr />
            <div className="text-center mt-4">
              <Button variant="outline-danger">
                Sign out <FaSignOutAlt />
              </Button>
            </div> <hr />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
      <hr />
    </>
  );
}
