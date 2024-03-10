import React, { useState } from 'react';
import "./Counter.css";

const Counter = ({ initial, max, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const decrementar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  }

  const incrementar = () => {
    if (contador < max) {
      setContador(contador + 1);
    }
  }

  const agregar = () => {
    onAdd(contador);
  }

  return (
    <div className="counter-container">
      <button className="counter-button" onClick={decrementar}>-</button>
      <p className="counter-value">{contador}</p>
      <button className="counter-button" onClick={incrementar}>+</button>
      <button className="counter-button" onClick={agregar}>Agregar</button>
    </div>
  );
}

export default Counter;
