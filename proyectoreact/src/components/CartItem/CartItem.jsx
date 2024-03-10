import React from 'react'

const CartItem = ({product,removeItem}) => {
  return (
    <div>

      <h3>{product.product.name}</h3>

      <img src={product.product.img} alt={product.product.name} />

      <p>cantidad:{product.cantidad}</p>

      <p>valor unitario: ${product.product.price*product.cantidad}</p>

      <button onClick={()=>removeItem(product.product.id)}>eliminar producto</button>

    </div>
  )
}

export default CartItem
