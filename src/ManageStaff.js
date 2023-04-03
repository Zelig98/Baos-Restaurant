import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Table from 'react-bootstrap/Table';

function ManageStaff() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="staff-nav">
                <div className="staff-nav-title"><h3>Manage Restaurant Staff</h3></div>
                <div className="staff-nav-add">
                    <Button variant="primary" onClick={handleShow} className="my-2">
                        <i className="fa-solid fa-square-plus"></i> Add Staff
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Staff Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                                    <Form.Control type="text" placeholder="First Name" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                                    <Form.Control type="text" placeholder="Last Name" />
                                </FloatingLabel>
                                <Form.Group className="mb-3 d-flex" controlId="staffRole">
                                    <Form.Check type="checkbox" label="Manager" className="col-4" />
                                    <Form.Check type="checkbox" label="Chef" className="col-4" />
                                    <Form.Check type="checkbox" label="Waiter" className="col-4" />
                                </Form.Group>
                                <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                                    <Form.Control type="phone" placeholder="Phone Number" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                    <Form.Control type="email" placeholder="Email" />
                                </FloatingLabel>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ManageStaff;