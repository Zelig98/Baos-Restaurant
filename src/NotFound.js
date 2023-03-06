import './css/NotFound.css';

const NotFound = () => {
    return ( 
        <div className="not-found text-center">
            <h1>404</h1>
            <div className="txt">
                <h1 className="ms-4">Page Not Found<span className="blink">_</span></h1>
            </div>
            <img src="/images/web_design/broken_robot.png" className="mt-3 broken-robot" alt=""/>
        </div>
    );
}
 
export default NotFound;