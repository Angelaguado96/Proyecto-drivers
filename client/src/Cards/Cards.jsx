import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
import { addDrivers } from '../Redux/action'
//  importacion de hook
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiChevronDoubleLeft, HiChevronDoubleRight, } from "react-icons/hi";





const Cards = () => {
       
  
   const [page, setPage] = useState(1) //  mi contador de page
   const [totalPages, setTotalPaguina] = useState(0) //  toal de paguinas es  57
   const dispatch = useDispatch()
   const resposeDeApi = useSelector((state) => state.myDrivers) //  traigo a mi estado global



   useEffect(() => {
      // despacho para el  momtaje de  los drivers 
      dispatch(addDrivers())
   }, [])



   useEffect(() => {
      //  la info de api lo divido entre 9 con valo  entero
      const total = Math.ceil(resposeDeApi.length / 9)
      //lo guardo en mi estado local
      setTotalPaguina(total)
      //  vlor  57
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

                  <button className='marcadorpage'> <span className='letaPagina'>Page: {page}</span></button>

                  <button className='botonNext' onClick={() => {
                     if (page < totalPages) {
                        setPage(page + 1);
                     } else {
                        setPage(totalPages)
                     }
                  }
                  }><HiChevronDoubleRight
                  /></button>

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
         {!!data.length &&
            data?.map((card) => {
               return (
                  <Card
                     key={card.id}
                     id={card.id}
                     forename={card.forename}
                     teams={card.teams ||card.Teams?.map((te)=>te.name).join(',') }
                     image={card.image}
                     dob={card.dob}
                  />
               )
            })
         }
         {!data.length &&  <div> no se encontro personajes </div> }


      </div>
   )
}






export default Cards
