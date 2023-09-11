
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { seachBarName,addDrivers } from '../Redux/action';
 import { Link } from 'react-router-dom'
 import './SearchBar.css'
 import logo from '../image/logooooo.png'



const SearchBar = () => {
   
   const [name, setName] = useState('');
   const dispatch = useDispatch();
   
   
   
    
     
      //  le estoy dadno valor  en imput 
      const handlerInpunt = (evento) => {
         setName(evento.target.value)
      }
      
      const handlerSearch = () => {
        
            dispatch(seachBarName(name))
            console.log('me estas despachando de searc ' +name)
      }
      const handlerDriversToal=()=>{
        dispatch(addDrivers())
      }

  return (
    <div className='cajaDeBuscador'>
      <div className='logo'>
         <img  className='imagenLogo' src={logo} alt="iamgen" />

      </div>
        
          <div className='CajaBu'>
        <button className='botoBuscar'onClick={handlerSearch} >Buscar</button>
       <input  type="text" value={name} onChange={handlerInpunt} className='imputBuscar' /> 
          </div>

          <div className='cajaDrives'>
       <button onClick={handlerDriversToal}>Driveres</button> 
          </div>

       <div className='cajaDeCrearPersonajes'>
       <Link to='/Formulario'>
       <button >Crear perosajes</button>
       </Link>
       </div>

     <div className='CajaDeInicio'>
       <Link to='/'>
       <button >inicio</button>
       </Link>
       </div>
      
      <div className='cajaHome'>

       <Link to='/home'>
       <button >Home</button>
       </Link>
      </div>
       <div>
       <Link to='/favorites'>
       <button >favorites</button>
       </Link>
      </div>
    </div>
  )
}

export default SearchBar


