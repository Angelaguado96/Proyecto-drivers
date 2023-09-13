// Exportaciones de los Controler
const { DetailControll } = require('../controllers/DetailConstroll')
const { getDrivers } = require('../controllers/getDrivers')
const { buscarBD } = require('../controllers/getIndependiente')
const { posteos } = require('../controllers/UserPost')
const { pedidoTeams } = require('../controllers/TeamsControler')
const { delUser } = require('../controllers/deleteControle')
const { actulizaUser } = require('../controllers/actualizaUser')









//:::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  Peticion a la API
const getUser = async (req, res) => {
   try {
      const respuestaGet = await getDrivers()
      res.status(200).json(respuestaGet);
   } catch (error) {
      res.status(400).json({ error:error.message});
   }

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Buscar  por  ID 
const userID = async (req, res) => {
   try {
      const { idDriver } = req.params
      const respuesta = await DetailControll(idDriver)
      res.status(200).json(respuesta)
   } catch (error) {
      res.status(401).json({ error: error.message })
   }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::
//Buscar  por  nombre 
const getIndependientes = async (req, res) => {
   try {
      const { name } = req.query 
    
   const resultado = await buscarBD(name)
     res.status(200).json(resultado)
   } catch (error) {
      res.status(400).json({ error: error.message })
   }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::
//SE esta Creando los personajes 

const userPost = async (req, res) => {

   try {
      const {forename,surename,description,image, dob,nationality, teams} = req.body
   // console.log(req.body.teams)
      const respuesta = await posteos(forename,  surename,description, image,  dob,nationality,teams)
      res.status(200).json(respuesta)
   } catch (error) {
      console.log(error)
      res.status(402).json({ error: error.message });
      
   }
}
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//Me traigo a los lo Teams de api y lo cargo a mi  base de datos 

const getTeams = async (req, res) => {

   try {
      const respuesta = await pedidoTeams()
      res.status(201).json(respuesta)
   
   } catch (error) {
      res.status(400).json({ error: error.message })
   }

}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::
// elimini un Driver


const deleteUser = async (req, res) => {

   try {
      const { idDriver } = req.params
      const respuesta = await delUser(idDriver)
      if (typeof respuesta === 'string')
         return res.status(400).json(respuesta)

      else {
         return res.status(200).json(respuesta)
      }

   } catch (error) {
      res.status(500).json({ error: error.message })
   }

}
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Se Modifica  DRiver Ceado  por  la api
const putUser = async (req, res) => {


   try {
      const {
         id,
         name,
         Apellido,
         Descripción,
         image,
         Fecha_de_Nacimiento,
         Nacionalidad,
         teamsId
      } = req.body;
      if ((id && name) || Apellido || Descripción || image || Fecha_de_Nacimiento || Nacionalidad || teamsId) {

         const userModify = await actulizaUser(id, name, Apellido, Descripción, image, Fecha_de_Nacimiento, Nacionalidad, teamsId);
         if (userModify.error) {
            res.status(404).json(userModify);
         } else {
            res.status(200).json(userModify);
         }

      } else {
         res.status(400).send('Mandame toda la info campeón!');
      }
   } catch (error) {
      res.status(500).send('Error en el servidor');
   }


}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// exportaciones hacia las RUTAS

module.exports = {
   userID,
   getUser,
   getIndependientes,
   userPost,
   getTeams,
   deleteUser,
   putUser
}



