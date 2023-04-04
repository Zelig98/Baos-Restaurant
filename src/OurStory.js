import './css/OurStory.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const OurStory = () => {
    return ( 
        <div className="our-story">
            <div className="text-center abbout-us">
                <div>
                    <h1 className="text-center text-about-us">About us</h1>
                    <p className="text-center fs-3">One of the best restaurant in VietNam</p> 
                </div>
            <Row className="about01 d-flex justify-content-center align-items-center">
                <Col>
                    <div className="lg-6 ps-5">
                        <div>                   
                            <div className="container">
                                <h1 className="text-white">Our Founder</h1>
                                <p className="header-divider mb-3">divider</p>
                                <p className="text-start about-description-text text-white">What started in 2022 with BAOS Team's first-owned restaurant, the BAOS brand has evolved into restaurants in three continents, six countries, and dozens of cities. The Michelin-starred Chef brings a restaurant experience for every taste and budget. From a fast-casual atmosphere with fun flare to upscale-fine dining, no matter the BAOS experience you choose, you will not soon forget.</p>
                                <br/>
                                <p className="text-start about-description-text text-white">BAOS Restaurant will continue to open fan-favorites across the continent, like BAOS Pho and BAOS Banh Mi, while also developing new-inventive concepts — all with the exceptional experience one can expect from a BAOS dining experience.</p>  
                            </div>        
                        </div>  
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="about-leader-img">
                        <img src="/images/web_design/leader.jpg" alt="our leader" className="p-5"/>
                    </div>
                </Col>
            </Row>
            <Row className="about02">
                <Col lg="6">
                    <div className="quote-img ">
                        <img src="/images/web_design/story.jpg" alt="ourClassName" className="about02-img w-100 h-100 px-3"/>
                    </div>
                </Col>
                <Col lg="6">
                    <div>
                        <div className="container">
                            <h1 className="text-white">Our Story</h1>
                            <p className="header-divider mb-3">divider</p>   
                            <p className="text-start about-description-text text-white">BAOS comprises the North VietNam restaurant business of acclaimed chef, restaurateur, TV personality. In 2022, BAOS inked a deal with private equity firm Itec Capital to expand BAOS restaurant concepts across the VietNam. 
                                We're excited to scale dining concepts—fast-casual, casual, and upscale—with plans to launch new brands like BAOS's Kitchen and tap into several of the successful VN and international key brands, 
                                including BAOS Pho, BAOS Banh Mi, BAOS Spring Rolls, etc.</p>
                            <br/>
                            <p className="text-start about-description-text text-white">BAOS Restaurant will continue to open fan-favorites across the continent, 
                                while also developing new-inventive concepts — all with the exceptional experience one can expect from a BAOS dining experience.</p>
                            <h3 className='about-location'>See map location in Contact page</h3>
                        </div>                                     
                    </div>  
                </Col>
            </Row>
            <Row className="about03 text-white">
                <Col lg='6'>
                    <div> 
                        <div className="container">
                            <h1>PAY IT FORWARD</h1>
                            <p className=" haha header-divider mb-3 " >divider</p>  
                            <p className="text-start about-description-text px-2">We're committed to helping the communities around us and dedicated to making the world a better place. 
                                We proudly support the One Hand Foundation of VietNam children's Research Hospital.</p>
                            <br/>
                            <p className="text-start about-description-text px-2">One Hand creates life-changing wishes for children with critical illnesses,
                                and through this partnership, we aim to support the cause..</p>  
                            <p className="text-start about-description-text px-2">As a proud partner of VietNam children's Research Hospita, we support the mission to lead the way the world understands, 
                                treats, and defeats childhood cancer and other life-threatening diseases.</p>
                        </div>               
                    </div>  
                </Col>
                <Col lg='6' className="ps-0" >
                    <img className="about03-img" src="/images/web_design/about03.jpg"/>
                </Col>
            </Row>
            </div>
        </div>
    );
}
 
export default OurStory;