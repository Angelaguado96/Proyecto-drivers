import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
import { addDrivers } from '../Redux/action'
//  importacion de hook
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {HiChevronDoubleLeft, HiChevronDoubleRight, } from "react-icons/hi";





const Cards = () => {


   const dispatch = useDispatch()
   const resposeDeApi = useSelector((state) => state.myDrivers)
    

   useEffect(() => {
      dispatch(addDrivers())
   },[])

   const [page, setPage] = useState(1)
   const [totalPages, setTotalPaguina] = useState(0)

   useEffect(() => {
      // aqui cojo el cpntendo del api  y  lo divido entre 9 con numero redondo  
      // seria  57 paguindos
      const total = Math.ceil(resposeDeApi.length / 9)
      //lo guardo en mi estado local
      setTotalPaguina(total)

   },[resposeDeApi])


   return (
      <div className='boxPrincipa'>
         {
            totalPages > 1 && (
            <div>
                <button className='botonBack ' onClick={()=> { 
                  if (page <= totalPages ) {
                      setPage(page -1);
                    } else {
                      setPage(page);
                    }
                 }}> <HiChevronDoubleLeft/></button>

                <button className='marcadorpage'>{page}</button>

                <button className='botonNext'onClick={()=>{
                    if (page < totalPages) {
                      setPage(page +1);
                    } else{
                      setPage(totalPages);
                    }
                 }
                }><HiChevronDoubleRight/></button>
            </div>
            )
         }
         <CardsList data={resposeDeApi.slice((page - 1) * 9, page * 9)} />
        
      </div>
   )
}

//................................
const CardsList = ({ data }) => {
   return (
      <div>
         {
            data.map((card) => {
               return (
                  <Card
                     key={card.id}
                     id={card.id}
                     forename={card.forename}
                     teams={card.teams}
                     image={card.image}
                     dob={card.dob}
                  />
               )
            })
         }
       
      </div>
   )
}






export default Cards
