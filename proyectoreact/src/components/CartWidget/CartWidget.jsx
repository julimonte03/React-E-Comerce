import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const {quantityCart} = useContext(CartContext);

    return (
        <div>
            <Link to={"/cart"}>            
                <p>cart</p>
                <p>{quantityCart() == 0 ? null : quantityCart()}</p>
            </Link>
        </div>
    )
}

export default CartWidget
