
// importacion  locales
import './App.css'
import LangdigPage from './LandigPage/LangdigPage'
import Home from './HomePage/Home.jsx'
import Detail from './Detail/Detail.jsx'
import Formulario from './formulario/Formulario'

//  importacion  Hook 
import { Routes, Route } from 'react-router-dom'






function App() {

    

  

  return (
    <>

      <Routes>
        <Route path='/' element={<LangdigPage />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
         <Route path='/Formulario' element={<Formulario/>} /> 
      </Routes>

    </>
  )
}

export default App
