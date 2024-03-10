import React, { useState, useContext } from 'react';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'; 
import Swal from 'sweetalert2'

const ItemDetail = ({ product }) => {

    const [cart, setCart] = useState(false);

    const { addToCart } = useContext(CartContext);

    const onAdd = (count) => {

        setCart(true);

        addToCart(product, count);
      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `¡Añadiste exitosamente ${count} ${count > 1 ? "productos" : "producto"} al carrito!`, 
          showConfirmButton: false,
          timer: 1500,
        });
      };
      

    if (!product) {

        return <div>No se pudo cargar el detalle del producto.</div>;
    }

    return (

        <div className="item-detail-container">

            <div className="item-detail-card">

                <h1 className="item-detail-name">{product.name}</h1>

                <img src={product.img} alt={product.name} className="item-detail-image" />

                <p className="item-detail-price">Precio: ${product.price}</p>

                <p className="item-detail-stock">Stock: {product.stock}</p>

                <div className="item-detail-actions">

                    {product.stock === 0

                    ?

                    <h2 className="out-of-stock-message">No hay más stock del producto...</h2>

                    : 
    
                    <>

                    <Counter initial={1} max={product.stock} onAdd={onAdd} />
      
                    {cart && 

                    <Link to={"/cart"} className="item-detail-button">Ir al carrito</Link>
                }
    </>
  }
</div>

            </div>
        </div>
    );
};

export default ItemDetail;
