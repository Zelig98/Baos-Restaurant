import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './css/Navbar.css'
import { useAuth } from './include/Authentication';
import Navlink from './components/Navlink';


const Navbar = () => {
    const {currentUser, logout}= useAuth();
    return (
        <div className='header mb-5'>
            <div className='pre-navbar position-relative'>
                <h1 className='logo-navbar font-milonga text-center'>BAO</h1>
                <div className='my-2'>
                    <Row className='align-items-center'>
                        <Col className='pe-0'>
                            <div className='bg-dark w-100 divider-medium'></div>
                        </Col>
                        <Col xs lg={3} className="mx-0 mx-ms-3">
                            <h3 className='text-center fw-bold'>RESTAURANT</h3>
                        </Col>
                        <Col className='ps-0'>
                            <div className='bg-dark w-100 divider-medium'></div>
                        </Col>
                    </Row>
                </div>
                <div className='menu-icon position-absolute'>
                    <div className='d-flex'>
                        {!currentUser && <Link to={'/login'}><i className="fa-solid fa-circle-user fs-1 mx-4"></i></Link>}
                        {currentUser && <Navlink to={'/logout'} name='Logout' onClick={ async e => {
                            e.preventDefault();
                            logout();
                        }}/>}
                        <Cart></Cart>
                    </div>
                </div>
            </div>

            <div className='main-navbar navbar bg-navbar'>
                <Container className='px-5'>
                    <Nav defaultActiveKey="/" as="ul" className='w-100 justify-content-between'>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to="/" className='text-light fw-bold fs-2'>HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/booking' className='text-light fw-bold fs-2'>BOOKING</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/menu' className='text-light fw-bold fs-2'>MENU</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/our_story' className='text-light fw-bold fs-2'>OUR STORY</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link as={Link} to='/contact' className='text-light fw-bold fs-2'>CONTACT</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
        </div>
    );
}
 
export default Navbar;