import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Payment_Card() {
    const [amount, setAmount] = useState(0);

    function handleChange(e) {
        setAmount(parseFloat(e.target.value));
    }

    const tax = amount * 0.1;
    const total = amount + tax;

    return (
        <Card className='border_radias'>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className='Payment_card'>
                <Card.Title>Order Summary</Card.Title>
                <Card.Text> Barcelona, Barcelona 08005 </Card.Text>
                <hr />

                <div className='d-flex justify-content-between pb-2'>
                    <h5 className='w-50'>Farm Rent</h5>
                    <input type="number" className='form-control w-25' placeholder="000" value={amount} onChange={handleChange} />
                </div>

                <div className='d-flex justify-content-between'>
                    <Card.Text> Amount</Card.Text>
                    <Card.Title>${amount.toFixed(2)}</Card.Title>
                </div>
                <div className='d-flex justify-content-between'>
                    <Card.Text>Tax</Card.Text>
                    <Card.Title>${tax.toFixed(2)}</Card.Title>
                </div>
                
                <hr className='HRtage'/>

                <div className='d-flex justify-content-between'>
                    <Card.Title>Order Total</Card.Title>
                    <Card.Title>${total.toFixed(2)}</Card.Title>
                </div>
                <br />
                <Button className='w-100 Oder_coupun'><a href="#">Add coupon code here</a></Button>
                <Link to="/payment">
                    <Button variant="primary" className='w-100 border_radias mt-4'>Checkout</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
