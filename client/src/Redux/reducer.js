import { ADD_DRIVERS, SEARCH_DRIVER_NAME, ORDER_ALFABETICAMENTE, FILTRADO_FECHA, ORDEN_NUMERO, TEAMS,FILTRADO_TEAMS,API,BD} from './action';



const initialState = {
   myDrivers: [], // principal
   copyDrivers: [], //  copia del principal
   teams:[],
  
 
}


const reducerDrivers = (state = initialState, action) => {

   switch (action.type) {

      case ADD_DRIVERS:
         return {
            ...state,
            myDrivers: action.payload,
            copyDrivers: action.payload,
         

         }
      //..............................................
      case SEARCH_DRIVER_NAME:
         return {
            ...state,
            myDrivers: action.payload,
         }
      //..............................................
      case FILTRADO_FECHA:
         const allcopyDrivers = [...state.copyDrivers]

         const getYears = (dob) => {
            // aqui  al string le saco solo el  año en pocicion 0 
            const añoPartes = dob.split('-')[0]
            return parseInt(añoPartes, 10)
            //  aqui  convierte cadena de  texto a numero  
         }
         return {
            ...state,
            myDrivers:
               action.payload === 'M'
                  // acedente
                  ? allcopyDrivers.sort((a, b) => {
                     const añoA = getYears(a.dob)
                     const añoB = getYears(b.dob)
                     return añoA - añoB
                  })
                  // desendente
                  : allcopyDrivers.sort((a, b) => {
                     const añoA = getYears(a.dob)
                     const añoB = getYears(b.dob)
                     return añoB - añoA

                  })

         }
      //..............................................
      case ORDER_ALFABETICAMENTE:
         const orderDrivers = [...state.copyDrivers]

         return {
            ...state,
            myDrivers:
               action.payload === 'A'
                  ? orderDrivers.
                     sort(
                        (a, b) => a.forename.
                           localeCompare(b.forename)
                     )
                  : orderDrivers.
                     sort(
                        (a, b) => b.forename.
                           localeCompare(a.forename)
                     )
         }
//....................................................
      case ORDEN_NUMERO:
         const orderNumero = [...state.copyDrivers]
         return {
            ...state,
            myDrivers:
               action.payload === 'P'
                  ? orderNumero.
                     sort(
                        (a, b) => a.id - b.id
                     )
                  : orderNumero.
                     sort(
                        (a, b) => b.id - a.id
                     )
         }
         //...........................................
      case TEAMS:
         return {
            ...state,
            teams: action.payload
         }

      case FILTRADO_TEAMS:
         const filtrado= state.copyDrivers. filter((filt)=> filt.teams !== undefined && filt.teams.includes(action.payload))
         return {
            ...state,
            myDrivers: filtrado
         }

    case API :
      return {
         ...state,
         myDrivers: state.copyDrivers.filter((a)=> typeof a.id === 'number')
      } 
      case BD :
      return {
         ...state,
         myDrivers:state.copyDrivers.filter((r)=> typeof  r.id === 'string')
      }



      default:
         return {
            ...state,

         }
   }

}

export default reducerDrivers;