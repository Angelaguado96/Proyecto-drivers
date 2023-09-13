
// importacion  locales
import './App.css'
import LangdigPage from './LandigPage/LangdigPage'
import Home from './HomePage/Home.jsx'
import Detail from './Detail/Detail.jsx'
import Formulario from './formulario/Formulario'
import Favorites from './Favorites/Favorites'
//  importacion  Hook 
import { Routes, Route } from 'react-router-dom'
import NavBar from './NavBarr/Navbar'
import { useLocation } from 'react-router-dom'





function App() {

     const location =useLocation()

  

  return (
    <>
  
 
    {location.pathname !== '/' && <NavBar/>}
        
      <Routes>
        <Route path='/' element={<LangdigPage />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
         <Route path='/Formulario' element={<Formulario/>} /> 
         <Route path='/favorites' element={<Favorites/>} /> 
      </Routes>

    </>
  )
}

export default App
