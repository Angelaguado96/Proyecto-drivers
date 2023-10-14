
import React from 'react'
import { useState } from 'react';

import { seachBarName,addDrivers,getrandon} from '../Redux/action';
 import { Link } from 'react-router-dom'
 import './SearchBar.css'
 import logo from '../image/logooooo.png'
 import { useDispatch } from 'react-redux'


const SearchBar = () => {
   
   const [name, setName] = useState('');

   const dispatch = useDispatch();
 

       const handerlucas=()=>{
          
          console.log(dispatch(getrandon()))
       }
   
    
     
      //  le estoy dadno valor  en imput 
      const handlerInpunt = (evento) => {
         setName(evento.target.value)
      }
      
      const handlerSearch = (name) => {
        
            dispatch(seachBarName(name))
            console.log('me estas despachando de searc ' +name)
      }

      // resetiado 
      const handlerDriversToal=()=>{
        dispatch(addDrivers())
      }

  return (
    <div className='cajaDeBuscador'>
      <div className='logo'>
         <img  className='imagenLogo' src={logo} alt="iamgen" />

      </div>
        
          <div className='CajaBu'>
        <button className='botoBuscar'onClick={()=>handlerSearch(name)} >Search</button>
       <input  type="text" value={name} onChange={handlerInpunt} className='imputBuscar' /> 
          </div>
            <div className='boxDeBotones '>

          <div className='cajaHome'>
       <button className='botones' onClick={handlerDriversToal}>Drivers</button> 
          </div>

       <div className='cajaHome'>
       <Link to='/Formulario'>
       <button  className='botones' >Create Drivers</button>
       </Link>
       </div>

     <div className='cajaHome'>
       <Link to='/'>
       <button className='botones'  >
Start</button>
       </Link>
       </div>
      
      <div className='cajaHome'>

       <Link to='/home'>
       <button  className='botones' >Home</button>
       </Link>
       <button onClick={handerlucas}> aleatoreo</button>
      </div>
       <div>
       
      </div>
      </div>
    </div>
  )
}

export default SearchBar


