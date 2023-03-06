import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './css/Home.css'

const Home = () => {
    return ( 
        <div className="home-page">
            <Row>
                <Col xl="9" className='pe-5'>
                    <h1 className='font-milonga text-center'>Signature Dish</h1>
                    <div className='divider-thin bg-dark mb-3'></div>
                    <div className='divider-thin bg-dark mb-3'></div>
                    <Row className='mt-5'>
                        <Col xl="3" lg="6" md="12">
                            <img src="/images/Foods/MainCoursed/GoiCuon.jpg" alt="GoiCuon.jpg" className='w-100 mb-3 border border-dark'/>
                            <div className='divider-thin bg-dark'></div>
                            <h3 className='my-2 text-center fw-bold'>Spring Rolls</h3>
                            <div className='divider-thin bg-dark'></div>
                            <h2 className='text-center price mt-1 fw-bold'>3.0$</h2>
                        </Col>
                        <Col xl="3" lg="6" md="12">
                            <img src="/images/Foods/MainCoursed/BanhMi.jpg" alt="GoiCuon.jpg" className='w-100 mb-3 border border-dark'/>
                            <div className='divider-thin bg-dark'></div>
                            <h3 className='my-2 text-center fw-bold'>Banh Mi</h3>
                            <div className='divider-thin bg-dark'></div>
                            <h2 className='text-center price mt-1 fw-bold'>3.0$</h2>
                        </Col>
                        <Col xl="3" lg="6" md="12">
                            <img src="/images/Foods/MainCoursed/SupCua.jpg" alt="GoiCuon.jpg" className='w-100 mb-3 border border-dark'/>
                            <div className='divider-thin bg-dark'></div>
                            <h3 className='my-2 text-center fw-bold'>Crab Soup</h3>
                            <div className='divider-thin bg-dark'></div>
                            <h2 className='text-center price mt-1 fw-bold'>5.0$</h2>
                        </Col>
                        <Col xl="3" lg="6" md="12">
                            <img src="/images/Foods/MainCoursed/GoiCuon.jpg" alt="GoiCuon.jpg" className='w-100 mb-3 border border-dark'/>
                            <div className='divider-thin bg-dark'></div>
                            <h3 className='my-2 text-center fw-bold'>Pho</h3>
                            <div className='divider-thin bg-dark'></div>
                            <h2 className='text-center price mt-1 fw-bold'>5.0$</h2>
                        </Col>
                    </Row>
                </Col>

                <Col xl="3" className='py-3 px-0'>
                    <div className='customer-review p-4'>
                        <h1 className='mb-3 text-center'><span className='fw-900'>Welcome</span> to our Restaurant</h1>
                        <h3 className='fw-bold mb-3'>Start</h3>
                        <Button variant="dark" className='fs-2 w-100 fw-bold py-2 mb-3'>BOOKING</Button>
                        <h3 className='fw-bold mb-3'>Or</h3>
                        <Button variant="outline-dark" className='fs-4 w-100 fw-bold py-2 mb-4'>PLACE AN ORDER</Button>
                        <h5 className='text-center'>Customer's Review</h5>
                        <div className='divider-thin bg-dark mb-3'></div>
                        <Row>
                            <Col xs="4">
                                <img src="/images/web_design/uncle_roger.png" alt="uncle_roger" className='w-100 h-100'/>
                            </Col>
                            <Col className='text-center align-self-center text-review'>
                                <p className='fw-bold m-0'>Uncle R</p>
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                <h3 className='fuiyoh'>"FUIYOH"</h3>
                            </Col>
                        </Row>
                    </div>                    
                </Col>
            </Row>
        </div>
    );
}
 
export default Home;