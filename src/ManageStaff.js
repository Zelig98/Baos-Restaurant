import React, { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Table from 'react-bootstrap/Table';
import StaffList from "./include/StaffList";
import { addStaff, getStaffs } from "./include/StaffFetch";

function ManageStaff() {
    const [show, setShow] = useState(false);
    const [emps, setStaffs] = useState(null);
    const [isPending, setPending] = useState(true);
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);
    const formRef = useRef(null);

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');

    const handleClose = () => {
        setShow(false);
    } 
    const handleShow = () => setShow(true);
    
  
    const handleReset = () => {
      formRef.current.reset();
      setValidated(false);
    };
    
    function handleValueChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value === "" || re.test(e.target.value)) {
          const x = Number(e.target.value);
          setCount(x);
          setError({'firstError': null});
        } else {
          setError("Your input is not valid");
        }
        e.preventDefault();
      }

    const handleFirstName = (event) => {
        handleValueChange(event);
        setFirstName(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handleLastName = (event) => {
        handleValueChange(event);
        setLastName(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handlePhone = (event) => {
        handleValueChange(event);
        setPhone(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handleRole = (event) => {
        handleValueChange(event);
        setRole(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handleUsername = (event) => {
        handleValueChange(event);
        setUsername(event.target.value);
        console.log('value is:', event.target.value);
    };
  
    function handleSubmit(e){
        e.preventDefault();

        console.log(first_name);
        console.log(last_name);
        console.log(role);
        console.log(phone);
        console.log(username);


        if(first_name=='' || last_name=='' || phone=='' || username=='' || role==''){
          alert('Adding staff failed! ')
        }else{
          addStaff(first_name, last_name, username, phone, role)
          .then(() => {
            alert('Staff is added!');
            handleReset();
            handleClose();
            
          })
        }
        
    }

    function callBack(){
        setPending(false);
    }

    function getStaffsList(emp, callback){
        setStaffs(emp);
        callback();
    }

    // useEffect(() => {
    //     getStaffs().then((result =>{
    //         getStaffsList(result, callBack);;
    //     }));       
    // });

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
                                    <Form.Control type="text" name="first_name" placeholder="First Name" value={first_name} onChange={(e)=>handleFirstName(e)}/>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                                    <Form.Control type="text" name="last_name" placeholder="Last Name" value={last_name} onChange={(e)=>handleLastName(e)}/>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                    <Form.Control type="text" placeholder="Username" value={username} onChange={(e)=>handleUsername(e)}/>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                                    <Form.Control type="text" placeholder="Phone Number" value={phone} onChange={(e)=>handlePhone(e)}/>
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Role" className="mb-3">
                                    <Form.Control type="text" placeholder="Role" value={role} onChange={(e)=>handleRole(e)}/>
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
                            <th>Phone</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    {/* List staff area */}
                    
                    {emps && <StaffList emps={emps}/>}
                       
                    {/* End of List staff area */}


                </Table>
                {isPending && 
                        <div className="text-center">
                            <div className="spinner-border m-5" role="status" style={{width: "5rem", height: "5rem"}}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                 }
            </div>
        </div>
    )
}

export default ManageStaff;