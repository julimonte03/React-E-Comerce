import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./CarWidget.css"

const CartWidget = () => {

    const { quantityCart } = useContext(CartContext);

    return (
        <div className="d-flex justify-content-center align-items-center">

            <Link to="/cart" className="text-black">

                <i className="bi bi-cart bi-3x"></i>

                {quantityCart() !== 0 && <p className="mb-0 ml-1">{quantityCart()}</p>}

            </Link>

        </div>
    );
};

export default CartWidget;
