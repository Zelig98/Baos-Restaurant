import { Button, Col, Row } from "react-bootstrap";

const FoodList = ({foods}) => {
    return ( 
        <Row className="foods-list mt-4">
            {foods.map((food) => (
                <Col xl="3" lg="6" md="12" className="mb-3" key={food.id}>
                    <img src={food.image} alt={food.image} className='w-100 mb-3 border border-dark'/>
                    <div className='divider-thin bg-dark'></div>
                    <h5 className='my-2 text-center fw-bold'>{food.name}</h5>
                    <div className='divider-thin bg-dark'></div>
                    <div className="d-flex justify-content-around align-items-center mt-3">
                        <h3 className='text-center price fw-bold m-0'>{food.price}$</h3>
                        <Button variant="success" className="fw-bold fs-5">Add</Button>{' '}
                    </div>
                </Col>
            ))}
        </Row>
    );
}

export default FoodList;