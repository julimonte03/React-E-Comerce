import React, { useState, useContext } from 'react';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {

    const [cart, setCart] = useState(false);
    
    const { addToCart } = useContext(CartContext);

    const onAdd = (count) => {
        setCart(true);
        addToCart(product, count); 
    }

    return (
        <div>
            {product ? (
                <>
                    <h1>{product.name}</h1>
                    <img src={product.img} alt={product.name} />
                    <h2>{product.price}</h2>
                    <h2>Stock: {product.stock}</h2>
                    {cart ? <Link to={'/cart'}>Ir al carrito</Link> : <Counter initial={1} stock={product.stock} onAdd={onAdd}></Counter>}
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
    
}

export default ItemDetail;
