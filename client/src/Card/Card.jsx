import React from 'react'
import './Card.css'
 import { Link } from 'react-router-dom'

 
const Card = ( {id,teams ,image,forename,dob} ) => {
   
 

  return (
   <div className='conteinerPrincipal'>
    <div className='conteinerCard'> 
    <Link to={`/detail/${id}`}>
      <img src={image} className='imagenes' alt="imagen " />
    </Link>
      <h4 className='h4'> Id: {id}</h4>
      <h4 className='h4'> Name: {forename}</h4>
      <h4 className='titleTeams'> Teams: {teams}</h4>
      <h4 className='titleTeams'> Fec.de Nacim. : {dob}</h4>
    </div>

   </div>
  )
}

export default Card
