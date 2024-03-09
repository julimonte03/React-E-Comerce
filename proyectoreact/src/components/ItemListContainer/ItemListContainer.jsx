import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom';
import { dataBase } from '../../firebase/config';
import {collection,getDocs,query,where} from "firebase/firestore"

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams(); 

    useEffect(() => {

        //FILTRADO DE PRODUCTOS

        const products = 

        categoryId ? 

        query(collection(dataBase,"products"),where("category","==",categoryId))

        : collection (dataBase,"products")

        getDocs(products)
        .then(res => {
            const nuevosProductos = res.docs.map(doc =>{
                const data = doc.data()
                return {id:doc.id,...data}
            })
            setProducts(nuevosProductos);
        })
        .catch(error => console.log(error));
    }, [categoryId]);

    return (
        <div>
            {products.length === 0 ? <h1>cargando...</h1> : <ItemList products = {products}/>}
        </div>
    );
}

export default ItemListContainer;
