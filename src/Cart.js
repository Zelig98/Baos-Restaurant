import './css/Cart.css'
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Cart = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

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
                    {}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart;