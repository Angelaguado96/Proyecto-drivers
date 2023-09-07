import './Detail.css'
const URL = 'http://localhost:3002/drivers'
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';






const Detail = () => {

   const { id } = useParams()
   const [drivers, setDrivers] = useState([])
  
   
   useEffect(() => {

      try {
         axios.get(`${URL}/${id}`)
            .then((response) => response.data)
            .then((data) => {
               if (data) {
                  setDrivers(data)
               } else {
                  alert('no se encontro el  perosonaje')
               }
            })

      } catch (error) {
         console.log({ error: 'hubo un error en la direcion' })
      }

   }, [id])



   return (
      <div className='boxPrincipal'>
       
       
         <h1 className='title'>Get to know me better...! </h1>
         <div className='box_image'>
            <img className='imagen' src={drivers.image} alt="imagen "/>
         </div>
         <div className='boxInfo'>
            <h2>id: {drivers?.id}</h2>
            <h2> Forename :{drivers?.forename}</h2>
            <h2> Surename :{drivers?.surename}</h2>
            <h2> Dob :{drivers?.dob}</h2>
            <h2> Nationality : {drivers?.nationality}</h2>
            <h2> Description : {drivers?.description}</h2>
            <h2> Teams :{drivers?.teams}</h2>
         </div>
      </div>
   )
}

export default Detail