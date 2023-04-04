import './css/Cart.css'
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ReactSession } from 'react-client-session';
import FoodCartBody from './include/FoodCartBody';
import Button from 'react-bootstrap/Button';
// import { addToPayment } from './include/PaymentFetch';
import { Link } from 'react-router-dom';

let setFoodCartBody;
let foodCartBody;
let setTotalPay;

function calculateTotalPay(){
    const foodCartSession = ReactSession.get("cart");
    let total = 0.0;

    foodCartSession.forEach(item => {
        total += item["quantity"] * item["price"];
    });

    return total.toFixed(2);
}

const Cart = () => {
    const foodCartSession = ReactSession.get("cart");
    const [_foodCartBody, _setFoodCartBody] = useState(foodCartSession);
    setFoodCartBody = _setFoodCartBody;
    foodCartBody = _foodCartBody;

    const [totalPay, _setTotalPay] = useState(calculateTotalPay());
    setTotalPay = _setTotalPay;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSubmit = () => {
        console.log(foodCartSession);
        // addToPayment();
        handleClose();
        alert("Foods is added to Payment");
    };

    return (
        <>
            <a className='cart-toggle-btn' onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping ms-2 fs-1 me-md-5"></i>
            </a>
            <Offcanvas placement="right" className="custom-cart" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Order Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <table className="food-list-added-table table table-striped fs-4">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        {/* food item in shopping cart */}
                        <FoodCartBody foodsInCart={foodCartBody}/>
                    </table>

                    <div className='total-pay-wraper'>
                        <div className="total-pay position-absolute">
                            <hr />
                            <div className='d-flex justify-content-between align-items-center'>
                                <Button className='ms-3 fw-bold' variant='success' onClick={handleSubmit}>Check Out</Button>
                                <Link to="/payment"><Button className='ms-3 fw-bold' variant='success'>View Payment</Button>{' '}</Link>
                                <h4 className="m-0">Total: $<span>{totalPay}</span></h4>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart;
export { setFoodCartBody, foodCartBody, setTotalPay, calculateTotalPay }