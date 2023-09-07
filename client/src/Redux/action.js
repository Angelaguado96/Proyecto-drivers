export const ADD_DRIVERS = 'ADD_DRIVERS'
 export const SEARCH_DRIVER_NAME = 'SEARCH_DRIVER_NAME'
export const ORDER_ALFABETICAMENTE = 'ORDER_ALFABETICAMENTE'
export const FILTRADO_FECHA = 'FILTRADO_FECHA'
export const ORDEN_NUMERO = 'ORDEN_NUMERO'
export const TEAMS = 'TEAMS'
export const FILTRADO_TEAMS = 'FILTRADO_TEAMS'
export const API = 'API'
export const BD = 'BD'

// export const DELETE_DRIVES = 'DELETE_DRIVES'


import axios from 'axios'


//  pido  toda la  info  de  api  
export const addDrivers = () => {
   return async function (dispatch) {

      try {
         const URL = 'http://localhost:3002/drivers'
         const { data } = await axios(`${URL}`)
         dispatch({ type: ADD_DRIVERS, payload: data })
      } catch (error) {
         console.error({ Error: 'salio algo mal en la peticion a la URL ' })
      }
   }
}


 //  buscando  por nombre  
 export const  seachBarName=(name) =>{
        
    return  async function (dispatch) {
       try {
         const URL=`http://localhost:3002/drivers/name?name=${name}`
           const {data}= await axios(`${URL}`)
         
           dispatch({type:SEARCH_DRIVER_NAME ,payload:data})
       } catch (error) {
         alert(`no se encontro el ${name} con esas caracteristicas`)
         
       }
    }
 }





        
//    return  async function (dispatch) {
//       try {
//         const URL=`http://localhost:3002/drivers/name?name=${id}`
//           const {data}= await axios(`${URL}`)
        
//           dispatch({type:DELETE_DRIVES ,payload:data})
//       } catch (error) {
//         alert(`no se encontro el ${id} con esas caracteristicas`)
        
//       }
//    }
// }



   //  filtrado  por fecha Nacimeinto

   //  peticion de teams
  
   
  
   export const  Teams = ()=>{
      return async  function (dispatch) {
         try {
            const URL= 'http://localhost:3002/teams'
            const response = await axios.get(`${URL}`)
            const datos = response.data
          
            dispatch({ type:TEAMS , payload: datos })
         } catch (error) {
            console.error('algo salio mal ')
         }
      }
   }

//  treigo el  nombre y el id 

export const filtadoTeams =(teams)=>{
   return {type:FILTRADO_TEAMS ,payload: teams }
}
 

 //filtrado  por feccha
   export const filterFecha =(dob)=>{
   return {type:FILTRADO_FECHA ,payload: dob}
}
 
  // ordenar  por alfabeticamente
 export const orderDrivers =(order)=>{
    return {type:ORDER_ALFABETICAMENTE ,payload: order}
 }

  // ordenar  por Numero
 export const orderNumero =(id)=>{
    return {type:ORDEN_NUMERO ,payload: id}
 }
  
 export const buscarApi = ()=>{
  
    return {type:API}
 }

 export const buscarbd = ()=>{
    return {type:BD }
 }
  
 












