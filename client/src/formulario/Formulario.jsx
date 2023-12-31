//  IMPORTACIONES  DE  LIBRERIAS  

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import  { toast,Toaster } from 'react-hot-toast';
//  IMPORTACIONES  DE  COMPONETES  
import './Formulario.css'
import { addDrivers, Teams } from '../Redux/action.js'
const URL = 'http://localhost:3002/drivers/'
import validar from './validaciones/validar'
import CarruComentario from '../carrucel/CarruComentario'






const Formulario = () => {
   //  estado local donde se almacena mi formulario
   const [errores, setErrores] = useState({})

   const [teamsIds, setTeamsIds] = useState([])// poner  todas la option  

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
   },[])


   //:::::::::::::::::::::::::::::::::::::::::::::::::
   
   // esta  funcion hace  que  pueda subir imagenesdesde dede mi archivos

   const fileImg = (img) => {
      Array.from(img).forEach(imgs => {
         let read = new FileReader();
         read.readAsDataURL(imgs);
         read.onload = function () {
            let base64 = read.result;
            setData({ ...data, image: base64 });
            // console.log(base64)
         }
      })
   };

   //:::::::::::::::::::::::::::::::::::::::::::::::::


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
         image: data.image,
         nationality: eve.target.nationality.value,
         dob: eve.target.dob.value,
         teams: teamsIds
      }


      const errores = validar(newdata)
      if (Object.values(errores).length) {
         return errores
      }
      try {
         // aqui estot enviadno  la  info de  NewData  validados
         const response = await axios.post(`${URL}`, newdata)
         console.log(newdata)
         console.log('se creo' + response.data)
         // alert('se creo con exito tu personaje')
      } catch (error) {
         console.error({ error: error.message })

      }

   }
 //  aqui guado  la  infomacion  de  los  temas en  un array  y los seteo  a mi estado  local 
   const handleIdsTems = ({ target }) => {

      const idExist = teamsIds.find(t => t == target.value);
     
      if (idExist) return;
      setTeamsIds([...teamsIds, target.value])
      const selectedTeams = Array.from(target.selectedOptions, (option) => option.value);
      // aqui  en  mi estado local  en  valor name: guardo el el valor de  aray creado
      setData({ ...data, [target.name]: selectedTeams });

   }

   // const  filtrodo  =  Nacionalidad.find((re)=>console.log(re.nationality))
   return (
      <div className='boxPri'>
         <div className='boxformulario'>
            <form onSubmit={handlerForm}>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="forename">Forename: </label> <br />
                  <input className='imput' type="text" id='forename' name='forename' value={data.forename}
                     onChange={halnderImput}
                  />
                  {errores.forename && <div className='error' >{errores.forename}</div>}
               </div>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="surename">Surename: </label> <br />
                  <input className='imput' type="text" id='surename' name='surename' value={data.surename}
                     onChange={halnderImput}
                  />
                  {errores.surename && <div className='error' >{errores.surename}</div>}
               </div>

               <div className='boximput'>
                  <label onClick={() => console.log(teamsIds)} className='tituloDeformulario' htmlFor="nationality">Nationality: </label> <br />
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
               {errores.nationality && <div className='error'>{errores.nationality}</div>}

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="image">Image: </label> <br />

                  <input className='imput' type="file"
                     onChange={(e) => fileImg(e.target.files)} />
                  {errores.image && <div className='error' >{errores.image}</div>}

               </div>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="dob"> Dob: </label> <br />
                  <input className='imput' type="date" id='dob' name="dob" value={data.dob} onChange={halnderImput} />
                  {errores.dob && <div  className='error' >{errores.dob}</div>}
               </div>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="description">Description: </label> <br />
                  <textarea className='imput' type="text" id='description' name='description' value={data.description}
                     onChange={halnderImput} />
                  {errores.description && <div className='error' >{errores.description}</div>}
               </div>

               <div className='boximput'>
                  <label className='tituloDeformulario' htmlFor="teams">Teams: </label> <br />
                  <select name='teams' id='teams' value={data.teams} multiple onChange={handleIdsTems} >
                     {
                        respTeams.map((team) => (
                           <option key={team.id} value={team.id} >
                              {team.name}
                           </option>
                        ))
                     }
                  </select>
                  {errores.teams && <div className='error' >{errores.teams}</div>}
               </div>


               <div className='boxBoton'>
                  <button className='botoCrear' disabled={!data.forename || !data.surename || !data.nationality || !data.dob || !data.description || !data.teams} onClick={()=> toast.success('se creo con exito tu personaje')}  id="button" type='submit'>CREAR DRIVERS</button>
                   <Toaster /> 
               </div>
               <div>
               
               </div>
            </form>

         </div>
         <div className='comentarios'>

            <CarruComentario />
         </div>
      </div>
   )
}

export default Formulario
