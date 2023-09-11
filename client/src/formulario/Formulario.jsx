//  IMPORTACIONES  DE  LIBRERIAS  
import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'


//  IMPORTACIONES  DE  COMPONETES  
import './Formulario.css'
import { addDrivers, Teams } from '../Redux/action.js'
const URL = 'http://localhost:3002/drivers/'
import validar from './validaciones/validar'
import CarruComentario from '../carrucel/CarruComentario'






const Formulario = () => {
   //  estado local donde se almacena mi formulario
   const [errores, setErrores] = useState({})

   const [teamsIds, setTeamsIds] = useState([])
  
   const [data, setData] = useState(
      {
         forename: '',
         surename: '',
         description: '',
         image: '',
         nationality: '',
         dob: '',
         teams: []
      }
   )


   const Nacionalidad = useSelector((state) => state.copyDrivers)
   const respTeams = useSelector((state) => state.teams)
   const dispatch = useDispatch()


   useEffect(() => {
      dispatch(addDrivers())
      dispatch(Teams())
   }, [])


   const halnderImput = (even) => {
     

         setData({ ...data, [even.target.name]: even.target.value });
      
      
      setErrores(validar({ ...data, [even.target.name]: even.target.value }))

   }

   //  ingeso la  informacion a la URL  de pedido post 
   const handlerForm = async (eve) => {
      eve.preventDefault()
      // validad errores   si hya eerro  no se  posteas
      const newdata = {
         forename: eve.target.forename.value,
         surename: eve.target.surename.value,
         description: eve.target.description.value,
         image: eve.target.image.value,
         nationality: eve.target.nationality.value,
         dob: eve.target.dob.value,
         teams: teamsIds
      }

      const errores = validar(newdata)
      console.log(errores)
      if (Object.values(errores).length) {
         return errores
      }
      try {
         console.log(newdata)
         const response = await axios.post(`${URL}`, newdata)
         console.log( response.data)
         alert('se creo con exito tu personaje')
      } catch (error) {
         alert('los campos estan vacios no se pudo crear')
         
      }
      
   }

   const handleIdsTems = ({target}) => {

   const idExist = teamsIds.find(t => t == target.value);
   if (idExist) return; 
    setTeamsIds([...teamsIds,target.value])
    const selectedTeams = Array.from(target.selectedOptions, (option) => option.value);
         // aqui  en  mi estado local  en  valor name: guardo el el valor de  aray creado
         setData({ ...data, [target.name]: selectedTeams });
   }



 
   return (
      <div className='boxPri'>
       
          
         <div className='boxformulario'>
            <form onSubmit={handlerForm}>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="forename">Forename: </label> <br/>
                  <input className='imput' type="text" id='forename' name='forename' value={data.forename}
                   onChange={halnderImput} 
                   />
                  {errores.forename && <div>{errores.forename}</div>}
               </div>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="surename">Surename: </label> <br/>
                  <input className='imput' type="text" id='surename' name='surename' value={data.surename}
                   onChange={halnderImput}
                    />
                  {errores.surename && <div>{errores.surename}</div>}
               </div>

               <div className='boximput'>
                  <label onClick={() => console.log(teamsIds)} className='tituloDeformulario' htmlFor="nationality">Nationality: </label> <br/>
                  <select className='imput' name='nationality' id='nationality' onChange={halnderImput} >
                     {
                        Nacionalidad.map((nac) => (
                           <option key={nac.id} value={nac.nationality} >
                              {nac.nationality}
                           </option>
                        ))
                     }
                  </select>
               </div>
               {errores.nationality && <div>{errores.nationality}</div>}

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="image">Image: </label> <br/>
                  <input className='imput' type="file" id='image' name='image' value={data.image}
                   onChange={halnderImput} />
                  {errores.image && <div>{errores.image}</div>}
               </div>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="dob"> Dob: </label> <br/>
                  <input className='imput'  type="date" id='dob' name="dob" value={data.dob} onChange={halnderImput} />
                  {errores.dob && <div>{errores.dob}</div>}
               </div>

               <div className='boximput'>
                  <label  className='tituloDeformulario' htmlFor="description">Description: </label> <br/>
                  <textarea  className='imput' type="text" id='description' name='description' value={data.description}
                   onChange={halnderImput} />
                  {errores.description && <div>{errores.description}</div>}
               </div>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="teams">Teams: </label> <br/>
                  <select  name='teams' id='teams' value={data.teams} multiple onChange={handleIdsTems} >
                     {
                        respTeams.map((team) => (
                           <option key={team.id} value={team.id} >
                              {team.name}
                           </option>
                        ))
                     }
                  </select>
                  {errores.teams && <div>{errores.teams}</div>}
               </div>

               <div className='boxBoton'>
                  <button  className='botoCrear' id="button" type='submit'>CREAR DRIVERS</button>
               </div>
               <div>

               </div>
            </form>

         </div>
        <div className='comentarios'>
        
        <CarruComentario/>
        </div>
      </div>
   )
}

export default Formulario
