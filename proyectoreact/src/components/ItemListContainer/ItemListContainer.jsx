import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams(); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await fetch("/products.json");
                const jsonProducts = await data.json();

                if (categoryId){
                    const filteredProducts = jsonProducts.filter((p)=> p.category == categoryId)
                    setProducts(filteredProducts);
                }else(setProducts(jsonProducts));
            } catch (error) {
                console.log("error en el fetch" + error);
            }
        }

        fetchProducts();

    }, [categoryId]);

    return (
        <div>
            {products.length === 0 ? <h1>cargando...</h1> : <ItemList products = {products}/>}
        </div>
    );
}

export default ItemListContainer;
