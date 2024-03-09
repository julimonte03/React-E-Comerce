import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, cantidad) => {
        const existentProductIndex = cart.findIndex((prod) => prod.product.id === product.id);
        
        if (existentProductIndex === -1) {
            setCart([...cart, { product, cantidad }]);
        } else {
            const newCart = [...cart];
            newCart[existentProductIndex].cantidad += cantidad;
            setCart(newCart);
        }
    };

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.product.id !== id);
        setCart(newCart);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const quantityCart = () => {
        return cart.reduce((total, item) => total + item.cantidad, 0);
    };

    const totalCart = () => {
        return cart.reduce((total, item) => total + (item.product.precio * item.cantidad), 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeItem,
                emptyCart,
                quantityCart,
                totalCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
