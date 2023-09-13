
//importaciones de  hook
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
//  importaciones de component
import './Detail.css'
const URL = 'http://localhost:3002/drivers'
import gif from '../image/gif.gif'





const Detail = () => {

   const { id } = useParams() //  traigo el  id de params
   const [drivers, setDrivers] = useState([]) //  aqui guardo la info de  mi  api
   
   console.log(drivers)
   
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
         console.error({error:error.message})
      }

   }, [id])


   return (
      <div className='boxPrincipal'>
       
         <h1 className='title'>Get to know me better...! </h1>
         <div className='box_image'>
            <img className='imagen' src={drivers.image} alt="imagen "/>
            <p className='letra'>CONOCEME</p>
         </div>
         <div className='boxInfo'>
            
            <h2 className='h2'> Forename :  {drivers?.forename}</h2><br/>
            <h2> Surename :  {drivers?.surename}</h2><br/>
            <h2> Dob: {drivers?.dob}</h2><br/>
            <h2> Nationality :  {drivers?.nationality}</h2><br/>
            <h2> Teams :  {drivers?.teams||drivers?.Teams?.map((te)=>te.name).join(',') }</h2><br/>
            <h2> Description : <br/> {drivers?.description}</h2><br/>
         </div>
            <div className='gif'>
              <img className='ImageGIf' src={gif} alt="imagen" />
         
            </div>
      </div>
   )
}

export default Detail
