import { useEffect } from 'react'
import { buscarbd,buscarApi,filtadoTeams,Teams, filterFecha, orderDrivers, orderNumero } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import './Filtrado.css'





const Filtrado = () => {

  const dispatch = useDispatch()
  const respTeams = useSelector((state) => state.teams)

  //  hago el  montaje de  mi Teams
   useEffect(() => {
     dispatch(Teams())
   }, [])


  const handlerOrder = (even) => {
    dispatch(orderDrivers(even.target.value))
  }
  const handlerFilterFecha = (even) => {
    dispatch(filterFecha(even.target.value))
  }
  const handlerNumeroOrder = (even) => {
    dispatch(orderNumero(even.target.value))
  }
  const halderFilterTeams = (even) => {
    dispatch(filtadoTeams(even.target.value))
    
  }
  
  const buscarAp =()=>{
   console.log('estas dento de api')
   dispatch(buscarApi())
  }
 
  const buscarDB =()=>{
    
    console.log('estas dentro de base de datos')
   dispatch(buscarbd())
  }
 
  

  return (
    <div className='boxxxxxx'>

      <div className='boxs'>
      <p className='titlePrincipla'>BD/API</p>
      <div className='boxDeOrigen'>

        <button className='api' onClick={buscarAp} >API</button>
        <button   className = 'api'onClick={buscarDB}>DB</button>  
      </div>
      
      </div>

      <div className='boxs'>
      <p className='titlePrincipla'> TEAMS </p>
        <select onChange={halderFilterTeams}  className='boxSelect' >
           <option  > TEAMS</option>

            {
              respTeams.map((team) => (
                <option key={team.id} value={team.name}>
                  {team.name}
                </option>
              ))
            }

        </select>
      </div>
      <div className='boxs'>
      <p className='titlePrincipla'> ORDENAMINETO ALFABETICAMENTE </p>
        <select className='boxSelect' onChange={handlerOrder}>

          <option  >ORDENALOS POR : </option>
          <option value="A" >A - Z</option>
          <option value="D" >Z - A</option>
        </select>
      </div>

      <div className='boxs'>
      <p className='titlePrincipla'> POR NUMERO DE ORDEN </p>
        <select className='boxSelect' onChange={handlerNumeroOrder}>
          <option  >ORDENALOS POR : </option>
          <option value="P" >Primero</option>
          <option value="U" >Mayor</option>
        </select>
      </div>

      <div className='boxs'>
      <p className='titlePrincipla'> POR FECHA DE NACIMIENTO </p>
        <select onChange={handlerFilterFecha} >
          <option  >ORDENALOS POR : </option>
          <option className='boxSelect' value="M" >Mayores</option>
          <option value="D" >Menores</option>
        </select>
      </div>

    </div>
  )
}

export default Filtrado
