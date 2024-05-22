import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCaretDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import img4 from '../assets/images/profile.jpeg';


export default function Profile_header(props) {
  return (
    <>
    <Container className=''>
    <Row className="align-items-center d-flex flex-wrap pt-2">
    <Col xs={6} className=''>
        <h4 className="d-inline-block">
        <NavLink to="/Welcome" className="navbar-brand text-decoration-none">
            <i className="fa-solid fa-film"></i> BusinessPass
        </NavLink>
        </h4>
    </Col>
    <Col xs={6} className="text-end d-flex justify-content-end align-items-center p-0">
        <img src={img4} alt="Profile" className="rounded-circle" width="40" />
        <span className="ms-1 me-0"> {props.title}</span>
        <FaCaretDown />
    </Col>
    </Row>
</Container><hr />
</>
  )
}
