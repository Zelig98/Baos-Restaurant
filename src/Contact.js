import './css/Contact.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = () => {
    return ( 
        <div className="contact my-3">
            <div className="container m-0">
                <Row>
                    <Col lg="6" className="ps-5 pe-5 align-self-center">
                        <div className='mt-0 p-0'>
                            <iframe className='map-location' height={405}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.6956572804993!2d106.68109885609414!3d10.762891104474834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sUniversity%20of%20Science%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1642059695858!5m2!1sen!2s">
                            </iframe>
                            <div className='location bg-location'>
                                <p className='location text-light'>Location</p>
                            </div>     
                        </div>      
                    </Col>
                    <Col lg="6" className=' contact-form align-self-center mb-lg-0 mb-4 p-5'>
                        <h3 className="tilteContactForm"><i className="fa-solid fa-phone pe-2"></i>Keep in touch with <span
                            style={{color: "orange"}}>BAOS</span></h3>
                        <hr/>
                        <form>
                        <div className="form-group p-1">
                            <label className='textContactForm'>Your name</label>
                            <input className="form-control"/>
                        </div>
                        <div className="form-group p-1">
                            <label className='textContactForm'>Your Phone</label>
                            <input className="form-control"/>
                        </div>
                        <div className="form-group p-1">
                            <label className='textContactForm'>What can we help you with ?</label>
                            <textarea className="form-control form-message" placeholder="Enter here..."></textarea>
                        </div>
                        <button className="btn btn-warning p-2 mt-3 w-100" font="100" type="submit" name="login"
                            value="true">Contact us</button>
                        </form>
                    </Col>
                </Row>
                
        </div>
    </div>
    );
}
 
export default Contact;