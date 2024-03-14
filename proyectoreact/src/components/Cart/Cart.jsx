import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import './Cart.css'; 

const Cart = () => {

  const { cart, emptyCart, removeItem, totalCart } = useContext(CartContext);

  return (

    <div className="cart-container">

      {cart.length === 0 ? (

        <div className="empty-cart">

          <h1>No hay productos en el carrito</h1>

          <Link to={"/"} className="home-link">Ir al inicio</Link>

        </div>

      ) : (

        <div className="cart-content">

          <h1 className="cart-title">Lista de carrito</h1>

          {cart.map((p) => (

            <CartItem key={p.product.id} product={p} removeItem={removeItem} />

          ))}

          <p className="total">Total: {totalCart()}</p>

          <button className="empty-button" onClick={emptyCart}>Vaciar carrito</button>

          <Link to={"/checkout"} className="checkout-link">Completar compra</Link>

        </div>

      )}
      
    </div>
  );
};

export default Cart;
