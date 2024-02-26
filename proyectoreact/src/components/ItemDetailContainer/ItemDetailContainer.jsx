import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetch("products.json");
                const jsonProducts = await data.json();
                const foundProduct = jsonProducts.find(p => p.id == id);
                if (foundProduct !== undefined){
                    setProduct(foundProduct);
                }
            } catch (error) {
                console.log("error en el fetch" + error);
            }
        }

        fetchProducts();

    }, [id]);

    return (
        <div>
            <ItemDetail product={product}/> 
        </div>
    )
}

export default ItemDetailContainer;
