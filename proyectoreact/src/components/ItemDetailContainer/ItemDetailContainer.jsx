import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams, Link } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetch("/products.json");
                const jsonProducts = await data.json();
                const foundProduct = jsonProducts.find(p => p.id == id);
                setProduct(foundProduct);
            } catch (error) {
                console.log("error en el fetch" + error);
            }
        }

        fetchProducts();

    }, [id]);

    return (
        <div>
                <Link to={`/detail/${product.id}`}>
                    <ItemDetail product={product} />
                </Link>
        </div>
    )
}

export default ItemDetailContainer;
