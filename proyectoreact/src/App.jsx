import './App.css'
import NavBar from './components/NavBar/NavBar'
import Sections from './components/Sections/Sections'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'; 
import ErrorRoute from './components/ErrorRoute/ErrorRoute'

function App() {

  return (
    <>
    
      <BrowserRouter> 
      {/* todo lo que este aca adentro esta en el entorno de navegación */}
      <NavBar/>

        <Routes>
          {/* diferentes rutas de navegación */}

          <Route path='/' element = {<Sections/>} />

          <Route path='/category/:categoryId' element = {<ItemListContainer/>}/>

          <Route path='/detail/:id' element = {<ItemDetailContainer/>}/>

          {/* ruta en caso de que ninguna de las anteriores funcionen */}

          <Route path='*' element = {<ErrorRoute/>}/>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
