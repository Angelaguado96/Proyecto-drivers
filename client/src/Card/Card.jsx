import React from 'react'
import './Card.css'
 import { Link } from 'react-router-dom'
 import { useDispatch } from 'react-redux'
 import {deleteDrivers} from'../Redux/action'
 import { useState} from 'react'

 

 
const Card = ( {id,teams ,image,forename,dob} ) => {

   const dispatch = useDispatch()
   
   const[isFav,setFav]=useState(false)
  

   const  handleFavorite =()=>{
    setFav(!isFav)
   }
   
   const  elimiar =()=>{
    dispatch(deleteDrivers(id))
    
   }


  return (
    

   <div className='conteinerPrincipal'>
    <div className='conteinerCard'>
        <button onClick={elimiar}> elimi</button>
    <Link to={`/detail/${id}`}>
      <img src={image} className='imagenes' alt="imagen " />
    </Link>
      <h4 className='h4'> Id: {id}</h4>
      <h4 className='h4'> Name: {forename}</h4>
      <h4 className='titleTeams'> Teams: {teams}</h4>
      <h4 className='titleTeams'> Fec.de Nacim. : {dob}</h4>
       
           <button className='botonlove' onClick={handleFavorite}>
            { isFav ? '❤️' :'🤍'}
             </button> 
    </div>

   </div>
    
  )
}

export default Card
