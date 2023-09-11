import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
import { addDrivers } from '../Redux/action'
//  importacion de hook
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiChevronDoubleLeft, HiChevronDoubleRight, } from "react-icons/hi";



  

const Cards = () => {

   const [page, setPage] = useState(1)
   const [totalPages, setTotalPaguina] = useState(0)

   const dispatch = useDispatch()
   //  traigo a mi estado global
   const resposeDeApi = useSelector((state) => state.myDrivers)
        
    

   useEffect(() => {
      // despacho para el  momtaje
      dispatch(addDrivers())
   }, [])



   useEffect(() => {
      // aqui cojo el cpntendo del api  y  lo divido entre 9 con numero redondo  
      // seria  57 paguindos
      
      const total = Math.ceil(resposeDeApi.length / 9)
      //lo guardo en mi estado local
      setTotalPaguina(total)

   }, [resposeDeApi])



   return (
      <div className='boxPrincipa'>
         {
            totalPages > 1 && (
               <div className='boxPaginado'>
                  <button className='botonBack ' onClick={() => {
                     if (page <= totalPages) {
                        setPage(page - 1);
                     } if (page === 1) {
                        setPage(page)
                     }
                  }}> <HiChevronDoubleLeft /></button>

                  <button className='marcadorpage'> <span className='letaPagina'>PAGUINA: {page}</span></button>

                  <button className='botonNext' onClick={() => {
                     if (page < totalPages) {
                        setPage(page + 1);
                     } else {
                        setPage(totalPages)
                     }
                  }
               }><HiChevronDoubleRight /></button>
         
               </div>
         
         )
      }
        

      <CardsList data={resposeDeApi?.slice((page - 1) * 8, page * 8)} />
      </div>
   )
}

//................................
// creo otra lista  y la renderzo  arriba  
const CardsList = ({ data }) => {
   return (
      <div>
         { !!data.length &&
            data?.map((card) => {
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
         { !data.length && <div>no se encontro al persona</div>}


      </div>
   )
}






export default Cards
