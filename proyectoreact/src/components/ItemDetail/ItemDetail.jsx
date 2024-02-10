import React from 'react';
import Counter from '../Counter/Counter';

const ItemDetail = ({product}) => {

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.img} alt={product.name} />
            <h2>{product.price}</h2>
            <h2>Stock:{product.stock}</h2>
            <p>{product.description}</p>

            <Counter initial = {1} max={product.stock} />
        </div>
    )
}

export default ItemDetail
