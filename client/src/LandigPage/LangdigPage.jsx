import React from 'react'
import './LadingPage.css'
import {Link } from 'react-router-dom'


const LangdigPage = () => {

  return (
   
     <div className='fondo'>
        <h1 className='title_h1'>BIENVENIDO</h1>
        <h2 className='title_h2'>Listo..!!🏎 Para empezar esta Carrera</h2>
      <Link to='/home'>
        <button className='botonDelanding'> Que Empieze la carrera</button>
      </Link>
        
     </div>
   

   
     

   
       
  
  )
}

export default LangdigPage
