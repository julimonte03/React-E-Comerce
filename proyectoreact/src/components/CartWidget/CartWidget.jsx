import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext);
    
    return (
        <div>

            <p>cart</p>
            <p>{totalQuantity == 0 ? null : totalQuantity}</p>

        </div>
    )
}

export default CartWidget
