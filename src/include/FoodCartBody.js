import { useEffect } from "react";
import { setFoodCartBody, foodCartBody, setTotalPay, calculateTotalPay } from "../Cart";
import { ReactSession } from 'react-client-session';

function handleRemoveItemFromCart(foodItemId){
    setFoodCartBody(foodCartBody.filter(item => item.id !== foodItemId));
}

const FoodCartBody = ({foodsInCart}) => {
    useEffect(() => {
        ReactSession.set('cart', foodCartBody);
        setTotalPay(calculateTotalPay());
    }, [foodCartBody]);

    return (
        <tbody>
            {foodsInCart.map((food, index) => (
                <tr key={food.id}>
                    <th scope="row">{index + 1}</th>
                    <td className="food-name-item-cart">{food.name}</td>
                    <td className="food-added-price">{food.price}</td>
                    <td className="amount-food-added">{food.quantity}</td>
                    <td className="ps-3"><i className="remove-food-item fas fa-trash ms-4" onClick={()=>{handleRemoveItemFromCart(food.id)}}></i></td>
                </tr>
            ))}
        </tbody>
    );
}
 
export default FoodCartBody;