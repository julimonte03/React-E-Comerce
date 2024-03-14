import './App.css'
import React,{useState,useEffect} from 'react'
import NavBar from './components/NavBar/NavBar'
import Sections from './components/Sections/Sections'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import ErrorRoute from './components/ErrorRoute/ErrorRoute'
import CartProvider from './context/CartContext'
import Checkout from './components/Checkout/Checkout'
import Contacto from './components/Contacto/Contacto'

function App() {

  return (
    <>
    
      <BrowserRouter> 
      {/* todo lo que este aca adentro esta en el entorno de navegación */}

      <CartProvider>

        <NavBar/>

        <Routes>
        {/* diferentes rutas de navegación */}

        <Route path='/' element = {<Sections/>} />

        <Route path='/category/:categoryId' element = {<ItemListContainer/>}/>

        <Route path='/detail/:id' element = {<ItemDetailContainer/>}/>

        <Route path='/cart' element = {<Cart/>}/>

        <Route path='/checkout' element = {<Checkout/>}/>

        <Route path='/contacto' element = {<Contacto/>}/>

        {/* ruta en caso de que ninguna de las anteriores funcionen */}

        <Route path='*' element = {<ErrorRoute/>}/>

        </Routes>

      </CartProvider>

      </BrowserRouter>

    </>
  )
}

export default App
