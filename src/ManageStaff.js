import React, { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Table from 'react-bootstrap/Table';
import StaffList from "./include/StaffList";
import { getStaffs } from "./include/StaffFetch";

function ManageStaff() {
    const [show, setShow] = useState(false);
    const [emps, setStaffs] = useState(null);
    const [isPending, setPending] = useState(true);
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null);

    const handleClose = () => {
        setShow(false);
    } 
    const handleShow = () => setShow(true);
    
  
    const handleReset = () => {
      formRef.current.reset();
      setValidated(false);
    };
  
    function handleSubmit(){
        handleClose();

        handleReset();
    }

    function callBack(){
        setPending(false);
    }

    function getStaffsList(emp, callback){
        setStaffs(emp);
        callback();
    }

    useEffect(() => {
        getStaffs().then((result =>{
            getStaffsList(result, callBack);;
        }));       
    });

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
                            <Form ref={formRef}  validated={validated}>
                                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                                    <Form.Control type="text" name="first_name" placeholder="First Name" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                                    <Form.Control type="text" name="last_name" placeholder="Last Name" />
                                </FloatingLabel>
                                <Form.Group className="mb-3 d-flex" controlId="staffRole" name="role">
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
                            <Button variant="secondary" onClick={handleReset}>
                                Reset
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
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
                            <th>Role</th>
                        </tr>
                    </thead>
                    {/* List staff area */}
                    {isPending && 
                        <div className="text-center">
                            <div className="spinner-border m-5" role="status" style={{width: "5rem", height: "5rem"}}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                    {emps && <StaffList emps={emps}/>}
                       
                    {/* End of List staff area */}


                </Table>
            </div>
        </div>
    )
}

export default ManageStaff;