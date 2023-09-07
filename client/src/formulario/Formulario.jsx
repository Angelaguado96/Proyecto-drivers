import React from 'react'
import { useState, useEffect } from 'react'
import './Formulario.css'
import { useSelector, useDispatch } from 'react-redux'
import { addDrivers, Teams } from '../Redux/action.js'
import  axios  from 'axios'
const URL = 'http://localhost:3002/drivers/'



const Formulario = () => {
   //  estado local donde se almacena mi formulario
   const [data, setData] = useState(
      {
         forename: '',
         surename: '',
         description: '',
         image: '',
         nationality: '',
         dob: '',
         teams: ''


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
      setData({ ...data, [even.target.name]: even.target.value })
   }

   const handlerForm = async (eve) => {
      eve.preventDefault()
      try {
         const response = await axios.post(`${URL}`,data)
            console.log('resouestadel servidor' ,response.data)   
      } catch (error) {
           console.error('algo salio mal en la peticion')
      }



   }

   return (
      <div className='boxformulario'>
         <form onSubmit={handlerForm}>
            <label htmlFor="forename">Forename: </label>
            <input type="text" id='forename' name='forename' value={data.forename} onChange={halnderImput} />

            <label htmlFor="surename">Surename: </label>
            <input type="text" id='surename' name='surename' value={data.surename} onChange={halnderImput} />

            <label htmlFor="nationality">Nationality: </label>
            <select name='nationality' id='nationality' onChange={halnderImput} >
               {
                  Nacionalidad.map((nac) => (
                     <option key={nac.id} value={nac.nationality} >
                        {nac.nationality}
                     </option>
                  ))
               }
            </select>

            <label htmlFor="image">Image: </label>
            <input type="file" id='image' name='image' value={data.image} onChange={halnderImput} />

            <label htmlFor="dob"> Dob: </label>
            <input type="date" id='dob' name="dob" value={data.dob} onChange={halnderImput} />

            <label htmlFor="description">Description: </label>
            <textarea type="text" id='description' name='description' value={data.description} onChange={halnderImput} />
            <label htmlFor="teams">Teams: </label>
            <select name='teams' id='teams' onChange={halnderImput} >
               {
                  respTeams.map((team) => (
                     <option type='checkbox' key={team.id} value={team.teams}>
                        {team.name}
                     </option>
                  ))
               }
            </select>

            <button id="button" type='submit'>CREAR NUEVOS DRIVERS</button>
         </form>

      </div>
   )
}

export default Formulario
