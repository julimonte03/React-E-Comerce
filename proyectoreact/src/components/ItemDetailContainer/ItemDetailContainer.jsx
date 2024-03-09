import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        const obtenerProducto = async () => {
            try {
                // Llamado al documento determinado
                const nuevoDoc = doc(dataBase, "products", id);

                // Renderizado del contenido del documento
                const res = await getDoc(nuevoDoc);
                const data = res.data();
                const nuevoProducto = { id: res.id, ...data };
                setProduct(nuevoProducto);
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        obtenerProducto();
    }, [id]);

    return (
        <div>
            <ItemDetail product={product}/> 
        </div>
    );
}

export default ItemDetailContainer;
