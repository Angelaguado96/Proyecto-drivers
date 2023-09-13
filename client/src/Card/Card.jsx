//  importacion de  componentes
import React from 'react'
import {deleteDrivers} from'../Redux/action'
import './Card.css'
//importacion de  koos
 import { Link } from 'react-router-dom'
 import { useDispatch } from 'react-redux'
 import { useState} from 'react'

 

 
const Card = ( {id,teams ,image,forename,dob} ) => {

   const dispatch = useDispatch()
   
  //  const[isFav,setFav]=useState(false)
  

  //  const  handleFavorite =()=>{
  //   setFav(!isFav)
  //  }
   
  //  aqui eslimino por id  las cartasd e base de datos
   const  elimiar =()=>{
    dispatch(deleteDrivers(id))
    
   }



   //  rederiso mis cartas
  return (
    

   <div className='conteinerPrincipal'>
    <div className='conteinerCard'>
        <button onClick={elimiar}> elimi</button>
    <Link to={`/detail/${id}`}>
      <img src={image} className='imagenes' alt="imagen " />
    </Link>
      <h4 className='h4'> Id: <span className='datos'>{id}</span> </h4>
      <h4 className='h4'> Name: <span className='datos'>{forename}</span> </h4>
      <h4 className='titleTeams'> Teams: <span className='datos'>{teams}</span> </h4>
      <h4 className='titleTeams'> Date Of Birth : <span className='datos'>{dob} </span> </h4>
         
    </div>

   </div>
    
  )
}

export default Card
