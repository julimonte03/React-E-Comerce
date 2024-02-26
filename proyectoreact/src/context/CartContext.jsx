import React,{useState,createContext} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) =>{

    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [totalQuantity,setTotalQuantity] = useState(0)

    const addToCart = (producto,cantidad) =>{
        console.log(producto)
        console.log(cantidad)
    }

    // removeItem = () =>{

    // }

    // emptyCart = () =>{

    // }

    // quantityCart = () =>{

    // }

    // totalCart = () =>{

    // }

    return(
        <CartContext.Provider value ={{
            cart,
            total,
            totalQuantity,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;