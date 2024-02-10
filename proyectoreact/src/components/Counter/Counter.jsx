import React, {useState} from 'react';

const Counter = ({initial,max}) => {
    // useState
    const [contador,setContador] = useState(1);
    // funcion de decrementar con el setContador
    const decrementar = () =>{
        if(contador > initial){
            setContador(contador - 1);
        }
    }
    // funcion de incrementar con el setContador
    const incrementar = () => {
        if (contador < max){
            setContador(contador + 1);
        }
    }
    // funcion de agregar
    const agregar = () => {
        if (contador > initial){
            alert(`Agregaste ${contador} productos!`)
            setContador(initial);
        }
    }
    return (
        <div>
            <button onClick={decrementar}>-</button>
            <p>{contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={agregar}>Agregar</button>
        </div>
    )
}

export default Counter
