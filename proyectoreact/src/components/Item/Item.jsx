import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <Link to = {`/detail ${product.id}`}>
        <div className='item-card'>

            <div key={product.id}>

                <img className='item-image' src={product.img} alt={product.name}/>
                <h2 className='item-name'>{product.name}</h2>
                <h3 className='item-price'>Precio:{product.price}</h3>
                <h3 className='item-stock'>Stock:{product.stock}</h3>         
                        
            </div>

        </div>
        </Link>
    )
}

export default Item
