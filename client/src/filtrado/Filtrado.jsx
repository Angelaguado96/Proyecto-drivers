import { useEffect } from 'react'
import { buscarbd,buscarApi,filtadoTeams,Teams, filterFecha, orderDrivers, orderNumero } from '../Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import './Filtrado.css'





const Filtrado = () => {

  const dispatch = useDispatch()
  const respTeams = useSelector((state) => state.teams) //  traigo la  info de estado  global

  //  hago el  montaje de  mi Teams
   useEffect(() => {
     dispatch(Teams())
   }, [])

   // aqui dispacho  las action para  oredenar alfabeticamente
  const handlerOrder = (even) => {
    dispatch(orderDrivers(even.target.value))
  }
  // aqui dispacho para ordenar por  Fecha
  const handlerFilterFecha = (even) => {
    dispatch(filterFecha(even.target.value))
    console.log(even.target.value)
  }
  // aqui dispacho para ordenar id
  const handlerNumeroOrder = (even) => {
    dispatch(orderNumero(even.target.value))
  }
  // despacho la info  del filtrado  por teams
  const halderFilterTeams = (even) => {
    dispatch(filtadoTeams(even.target.value))
    
    
  }
  
  //  aqui dispavho la  info que tegno en api 
  const buscarAp =()=>{
   
   dispatch(buscarApi())
  }
  // aqui dispacho la  info que  tengo en la base de datos  
  const buscarDB =()=>{
    // console.log('estas dentro de base de datos')
   dispatch(buscarbd())
  }
 
  

  return (
    <div className='boxxxxxx'>

      <div className='boxs'>
      <p className='titlePrincipla'>BD/API</p>
      <div className='boxDeOrigen'>

        <button className='botoness' onClick={buscarAp} >API</button>
        <button   className = 'botoness'onClick={buscarDB}>DB</button>  
      </div>
      
      </div>

      <div className='boxs'>
      <p className='titlePrincipla'> TEAMS </p>
        <select  onChange={halderFilterTeams}  className='boxSelect' >
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
      <p className='titlePrincipla'> ALPHABETICALL </p>
        <select className='boxSelect' onChange={handlerOrder}>

          <option  >ORDENALOS POR : </option>
          <option value="A" >A - Z</option>
          <option value="D" >Z - A</option>
        </select>
      </div>

      <div className='boxs'>
      <p className='titlePrincipla'> BY ORDER NUMBER
 </p>
        <select className='boxSelect' onChange={handlerNumeroOrder}>
          <option  >ORDENALOS POR : </option>
          <option value="P" >1 - 508</option>
          <option value="U" >508 - 1</option>
        </select>
      </div>

      <div className='boxs'>
      <p className='titlePrincipla'> BY DATE OF BIRTH </p>
        <select className='boxSelect' onChange={handlerFilterFecha} >
          <option  >ORDENALOS POR : </option>
          <option className='boxSelect' value="M" >Mayores</option>
          <option value="D" >Menores</option>
        </select>
      </div>

    </div>
  )
}

export default Filtrado
