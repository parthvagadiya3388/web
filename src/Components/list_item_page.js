import { Button } from 'bootstrap'
import React from 'react'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import img1 from "../assets/images/asset 14.jpeg";
import img2 from "../assets/images/asset 9.jpeg";
import img3 from "../assets/images/asset 19.jpeg";
import img4 from "../assets/images/asset 10.jpeg";
import { Link } from 'react-router-dom';
import Profile_header from '../login_Components/profile_header';

const Datas = [
  {
    id: 0,
    title: 'Creola Katherine Johnson',
    location: 'Surat 395001',
    rating: 4.5,
    image: img1
  },
  {
    id: 1,
    title: 'Katherine Creola Johnson',  
    location: 'Amedabad 4545454',
    rating: 4.4,
    image: img2
  },
  {
    id: 2,
    title: 'Johnson Creola Katherine',
    location: 'Rajkot 784545',
    rating: 3.5,
    image: img3
  },
  {
    id: 3,
    title: 'Creola Katherine Johnson',
    location: 'Amedabad 985685',
    rating: 3.5,
    image: img4
  },
];


export default function List_item_page() {
  return (
    <>
    <Profile_header title="Tony Patel"/>
    <Container fluid>

        <Row className="">
          <Col className="p-4 wlc_card" sm={12} md={12} lg={6}>
            <h4 className='pb-2'>
                 Explore inspiring spaces in <strong className="text-primary"> Spain</strong>
            </h4>

            <div className="d-flex mb-3">
                <InputGroup.Text id="basic-addon1" className='w-100 bg-white border_radias'>
                <select className="form-select dropdown_search">
                    <option value="Spain">Spain</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="China">China</option>
                </select>
                <button className='btn btn-primary border_radias'>Search</button>
                </InputGroup.Text>
            </div>
    

            <div className="w-100 d-flex justify-content-between flex-wrap">
                    <select className="form-select col-md-4 col-sm-6 mt-2 drops_radis" aria-label="Select workspace type" defaultValue="Workspace type">
                            <option value="Workspace type">Workspace type</option>
                            <option value="coworking">Coworking</option>
                            <option value="private_office">Private Office</option>
                            <option value="conference_room">Conference Room</option>
                    </select>
                    <select className="form-select col-md-3 col-sm-5 mt-2 drops_radis" aria-label="Select capacity" defaultValue="Capacity">
                            <option value="Capacity">Capacity</option>
                            <option value="small">1-5 people</option>
                            <option value="medium">6-15 people</option>
                            <option value="large">16-50 people</option>
                    </select>
                    <select className="form-select col-md-2 col-sm-6 mt-2 drops_radis" aria-label="Select walking distance" defaultValue="Walking Distance">
                        <option value="Walking Distance">Distance</option>
                        <option value="5min">Within 5 minutes</option>
                        <option value="10min">Within 10 minutes</option>
                        <option value="15min">Within 15 minutes</option>
                    </select>
                    <select className="form-select col-md-2 col-sm-5 mt-2 drops_Filter" aria-label="Select filter" defaultValue="Filter">
                        <option value="Filter">Filter</option>   
                        <option value="price_low_high">Price: Low to High</option>
                        <option value="price_high_low">Price: High to Low</option>
                        <option value="rating">Rating</option>
                    </select>
              </div> <hr />

            {Datas.map((Data) => 
                <div className="card mt-2 border_radias"  key={Data.id}>
                <div className='d-flex flex-wrap product_card_body_div'>
                    <div className='col-sm-4 pl-0 pr-0 bg-black Product_imag_div'>
                        <img src={Data.image} className="w-100 h-100 object-fit-cover product_image"/>
                    </div>
                    <div className="card-body col-sm-8">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">{Data.title}</h5>
                            <span className="badge bg-warning text-white">{Data.rating} ★</span>
                        </div>
                        <p className="card-text p-0 m-0">{Data.location}</p> <br/>
                        <Link to="/order" className="btn btn-light btn-outline-primary border_radias">Book Now!</Link>
                    </div>
                </div>
               </div>
            )}
          </Col>

          <Col sm={12} md={12} lg={6} className="image_main">
            <div className='w-100 h-auto'>
                <div className='card drops_radis'>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5887.207649501971!2d70.79030985340661!3d22.302566849901112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13ff465c15439433%3A0x120b3071a67f4d2a!2sFun%20World!5e0!3m2!1sen!2sin!4v1715855395707!5m2!1sen!2sin"
                    width="100%"
                    height="600px"
                    style={{ border: 0 }}
                    loading="lazy"
                    ></iframe>
                </div>
            </div>

          </Col>

        </Row>

    </Container>
    </>
  )
}



