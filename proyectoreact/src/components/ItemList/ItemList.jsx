import React from 'react'
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <div className='products-container'>

            {products.map((product, index) => (
                
                <Item product = {product} />

            ))}
        </div>
    )
}

export default ItemList
