
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { seachBarName,addDrivers } from '../Redux/action';
 import { Link } from 'react-router-dom'




const SearchBar = () => {
   
   const [name, setName] = useState('');
   const dispatch = useDispatch();
   
   
    
     
      //  le estoy dadno valor  en imput 
      const handlerInpunt = (evento) => {
         setName(evento.target.value)
      }
      
      const handlerSearch = () => {
            dispatch(seachBarName(name))
      }
      const handlerDriversToal=()=>{
       console.log('esta en principal '+ dispatch(addDrivers()))
      }

  return (
    <div>
        <button className='botoBuscar'onClick={handlerSearch} >Buscar</button>
       <input  type="text" value={name} onChange={handlerInpunt} className='imputBuscar' /> 
       <button onClick={handlerDriversToal}>Driveres</button> 
        
       <Link to='/Formulario'>
       <button >Crear perosajes</button>
       </Link>
       

    </div>
  )
}

export default SearchBar


