const Footer = () => {
    return ( 
        <div className="footer mt-3">
            <div className='bg-dark w-100 divider-medium mb-2'></div>
            <div className="d-flex justify-content-between align-items-center">
                <div className="footer-contact">
                    <p className="fs-4 m-0">Location: Ho Chi Minh City</p>
                    <p className="fs-4">Tel: 0123456789</p>
                </div>
                <div className="social-media d-flex fs-1">
                    <i className="fa-brands fa-facebook mx-3"></i>
                    <i className="fa-brands fa-twitter mx-3"></i>
                    <i className="fa-brands fa-instagram mx-3"></i>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;