import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, emptyCart, removeItem, totalCart } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <>
          <h1>No hay productos en el carrito</h1>
          <Link to={"/"}>Ir al inicio</Link>
        </>
      ) : (
        <>
          <h1>Lista de carrito</h1>

          {cart.map((p) => (

            <CartItem key={p.product.id} product={p} removeItem={removeItem} />
            
          ))}
          <p>Total: {totalCart()}</p>

          <button onClick={emptyCart}>Vaciar carrito</button>

          <Link to={"/checkout"}>
          Completar compra
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
