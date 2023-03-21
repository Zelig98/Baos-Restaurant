import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Menu.css"
import FoodList from "./include/FoodList";
import { getFoodsData, getNumberFoods } from "./include/MenuFetch";
import Paginate from "./include/Paginate";

//define 
const FOOD_ITEM_PER_PAGE = 8;

const Menu = () => {
    let NumberOfFoods;
    const [categories, setCategories] = useState("all");
    const [totalPage, setTotalPage] = useState(0);
    const [foods, setFoods] = useState(null);
    const [isPending, setPending] = useState(true);
    const [isResetTotalPage, setResetTotalPage] = useState(false);
    
    function handlePageClick(event) {
        const pageIndex = event.selected;

        refeshFoodsList(); // clear previous foods list and set pending to true again

        getFoodsData(categories, pageIndex * FOOD_ITEM_PER_PAGE + 1).then((result =>{
            getFoodsList(result, callBack);
        }));
    };

    function callBack(){
        setPending(false);
    }

    function getFoodsList(foods, callback){
        setFoods(foods);
        callback();
    }

    function refeshFoodsList(){
        setFoods(null);
        setPending(true);
    }

    //observer will execute the function when category variable is changed)
    useEffect(() => {
        console.log("category changed to " + categories);

        getNumberFoods(categories).then((result => {
            NumberOfFoods = result; //get number of food from current category before set food list and pagination
            
            setResetTotalPage(true);
            refeshFoodsList(); // clear previous foods list and set pending to true again

            getFoodsData(categories).then((result =>{
                setTotalPage(Math.ceil(NumberOfFoods / FOOD_ITEM_PER_PAGE));
                getFoodsList(result, callBack);
                setResetTotalPage(false);
            }));
        }));        
    }, [categories]);

    return ( 
        <div className="Menu">
            <Container>
                <Row>
                    <Col md="3" className="d-flex menu-categories flex-md-column d-block">
                        <button type="button" className="menu-categories-btn btn fs-4 fw-bold text-start" onClick={() => { setCategories("all"); }}>All</button>
                        <button type="button" className="menu-categories-btn btn fs-4 fw-bold text-start" onClick={() => { setCategories("main courses");}}>Main Courses</button>
                        <button type="button" className="menu-categories-btn btn fs-4 fw-bold text-start" onClick={() => { setCategories("dessert");}}>Desserts</button>
                        <button type="button" className="menu-categories-btn btn fs-4 fw-bold text-start" onClick={() => { setCategories("beverage");}}>Beverages</button>
                    </Col>
                    <div className="vertical-divider p-0 d-none d-md-block">
                        <div className="vr opacity-100 p-0"></div>
                    </div>

                    <Col md="9" className="foods-area ps-4">
                        <h3 className="font-milonga mt-3 mt-md-0">MENU - <span className="text-danger">{categories.toUpperCase()}</span></h3>
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

                        {!isResetTotalPage && <Paginate pageCount={totalPage} handlePageClick={handlePageClick} /> }
                    </Col>
                </Row>
            </Container>
        </div>
     );
}

export default Menu;