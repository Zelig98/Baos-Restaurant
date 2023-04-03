import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    getQuantity: () => { },
    addToCart: () => { },
    removeFromCart: () => { },
    deleteItem: () => { },
    getTotalCost: () => { }
})

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function getQuantity(id) {
        cartItems.find(item => item.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }

        return quantity
    }

    function addToCart(id) {
        const quantity = getQuantity(id);

        if (quantity === 0) {
            setCartItems(
                [...cartItems, {
                    id: id,
                    quantity: 1
                }])
        } else {
            setCartItems(
                cartItems.map(
                    item => item.id === id ?
                        { ...item, quantity: item.quantity + 1 }
                        : item
                )
            )
        }
    }

    function removeFromCart(id) {
        const quantity = getQuantity(id);

        if (quantity === 1) {
            deleteItem(id)
        } else {
            setCartItems(
                cartItems.map(
                    item => item.id === id ?
                        { ...item, quantity: item.quantity - 1 }
                        : item
                )
            )
        }
    }

    function deleteItem(id) {
        setCartItems(
            cartItems => cartItems.filter(currentItem => {
                return currentItem.id != id;
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0;
        cartItems.map((cartItem) => {
            const data = getData(cartItem.id);
            totalCost += (data.price * cartItem.quantity)
        });
        return totalCost;
    }

    const context = {
        items: cartItems,
        getQuantity,
        addToCart,
        removeFromCart,
        deleteItem,
        getTotalCost
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;