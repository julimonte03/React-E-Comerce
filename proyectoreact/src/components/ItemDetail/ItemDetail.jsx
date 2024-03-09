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
    };

    // Verificar si product está definido antes de acceder a sus propiedades
    if (!product) {
        return <div>No se pudo cargar el detalle del producto.</div>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name} />
            <h3>{product.price}</h3>
            <h3>{product.stock}</h3>
            {/* <p>{product.description}</p> */}

            {product.stock === 0 ? (
                <h2>No hay más stock del producto...</h2>
            ) : cart ? (
                <Link to={'/cart'}>Ir al carrito</Link>
            ) : (
                <Counter initial={1} stock={product.stock} onAdd={onAdd} />
            )}
        </div>
    );
};

export default ItemDetail;
