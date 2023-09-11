// TYPE ACTIONS
export const ADD_DRIVERS = 'ADD_DRIVERS'
export const SEARCH_DRIVER_NAME = 'SEARCH_DRIVER_NAME'
export const ORDER_ALFABETICAMENTE = 'ORDER_ALFABETICAMENTE'
export const FILTRADO_FECHA = 'FILTRADO_FECHA'
export const ORDEN_NUMERO = 'ORDEN_NUMERO'
export const TEAMS = 'TEAMS'
export const FILTRADO_TEAMS = 'FILTRADO_TEAMS'
export const API = 'API'
export const BD = 'BD'
export const DELETE_DRIVERS = 'DELETE_DRIVERS'
// export const ADD_FAV = 'ADD_FAV'
//IMPORTACION DE HOOK
import axios from 'axios'








//  pido  toda la  info  de  api negro feo 
export const addDrivers = () => {
   return async function (dispatch) {

      try {
         const URL = 'http://localhost:3002/drivers'
         const { data } = await axios(`${URL}`)
         console.log(data)
         dispatch({ type: ADD_DRIVERS, payload: data })
      } catch (error) {
         console.error({ error: error.message })
      }
   }
}


//  buscando  por nombre  
export const seachBarName = (name) => {
   console.log('estas en action ' + name)
   return async function (dispatch) {
      try {
         const URL = `http://localhost:3002/drivers/name?name=${name}`
         const { data } = await axios(`${URL}`)
         console.log('awd' + data)
         dispatch({ type: SEARCH_DRIVER_NAME, payload: data })

      } catch (error) {
         console.error({ error: error.message })

      }
   }
}



// eliminar cartas

export const deleteDrivers = (id) => {

   return async function (dispatch) {
      try {
         const URL = `http://localhost:3002/drivers/${id}`
         const { data } = await axios.delete(`${URL}`)
         
            if(data.length===0) throw Error ('no se encontro ese personaje ')

            dispatch( addDrivers())
         return dispatch({ type: DELETE_DRIVERS, payload: data })
      } catch (error) {
         console.log({ error: error.message })

      }
   }
}





//  peticion de teams
export const Teams = () => {
   return async function (dispatch) {
      try {
         const URL = 'http://localhost:3002/teams'
         const response = await axios.get(`${URL}`)
         const datos = response.data

         dispatch({ type: TEAMS, payload: datos })
      } catch (error) {
         console.error({ error: error.message })
      }
   }
}

//  treigo el  nombre y el id 

export const filtadoTeams = (teams) => {
   return { type: FILTRADO_TEAMS, payload: teams }
}


//filtrado  por feccha
export const filterFecha = (dob) => {
   return { type: FILTRADO_FECHA, payload: dob }
}

// ordenar  por alfabeticamente
export const orderDrivers = (order) => {
   return { type: ORDER_ALFABETICAMENTE, payload: order }
}

// ordenar  por Numero
export const orderNumero = (id) => {
   return { type: ORDEN_NUMERO, payload: id }
}
//buscar buscar en api
export const buscarApi = () => {

   return { type: API }
}
//buscar bd
export const buscarbd = () => {
   return { type: BD }
}














