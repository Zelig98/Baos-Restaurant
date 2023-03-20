import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/Menu.css"
import FoodList from "./FoodList";
import { getFoodsData } from "./include/Firebase";

const Menu = () => {
    const [categories, setCategories] = useState("all");
    const [foods, setFoods] = useState(null);
    const [isPending, setPending] = useState(true);
    
    function callBack(){
        setPending(false);
    }

    function getFoodsList(foods, callback){
        setFoods(foods);
        callback();
    }


    useEffect(() => {
        console.log("use effect ran");

        getFoodsData().then((result =>{
            console.log(result);
            getFoodsList(result, callBack);
        }));

    }, []);

    return ( 
        <div className="Menu">
            <Container>
                <Row>
                    <Col md="3" className="d-flex menu-categories flex-md-column d-block">
                        <button type="button" className="menu-categories-btn btn fs-4 fw-bold text-start">All</button>
                        <button type="button" className="menu-categories-btn btn fs-4 fw-bold text-start">Main Courses</button>
                        <button type="button" className="menu-categories-btn btn fs-4 fw-bold text-start">Deserts</button>
                        <button type="button" className="menu-categories-btn btn fs-4 fw-bold text-start">Beverages</button>
                    </Col>
                    <div className="vertical-divider p-0 d-none d-md-block">
                        <div className="vr opacity-100 p-0"></div>
                    </div>

                    <Col md="9" className="foods-area ps-4">
                        <h3 className="font-milonga mt-3 mt-md-0">MENU</h3>
                        <div className='divider-thin bg-dark mb-2'></div>
                        <div className='divider-thin bg-dark mb-3'></div>

                        {/* List food area */}
                        {isPending && 
                        <div className="text-center">
                            <div className="spinner-border m-5" role="status" style={{width: "5rem", height: "5rem"}}>
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        {foods && <FoodList foods={foods}/>}                  
                        {/* End of List food area */}
                    </Col>

                </Row>
            </Container>
        </div>
     );
}
 
export default Menu;