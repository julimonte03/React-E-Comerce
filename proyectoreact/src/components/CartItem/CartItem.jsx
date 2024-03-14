import React from 'react'
import './CartItem.css';

const CartItem = ({product,removeItem}) => {
  return (
    <div className='cart-item'>

      <h3>{product.product.name}</h3>

      <img src={product.product.img} alt={product.product.name} />

      <p>Cantidad:{product.cantidad}</p>

      <p>Total: ${product.product.price*product.cantidad}</p>

      <button onClick={()=>removeItem(product.product.id)}>Eliminar producto</button>

    </div>
  )
}

export default CartItem
