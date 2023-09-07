// ESTA ES  CONFIGURACION DE  RUTER AQUI TRAE DE  NPM 
const { Router } = require("express");
const router = Router();
// AQUII SE  TRAE  TODO  LOS CONTROLADOES
const { getUser } = require('../handlers/handrerUser')
const { userID } = require('../handlers/handrerUser')
const  {getIndependientes}= require('../handlers/handrerUser')
const  {userPost}= require('../handlers/handrerUser')
const  {getTeams}= require('../handlers/handrerUser')
 const  {deleteUser}= require('../handlers/handrerUser')
 const  {putUser}= require('../handlers/handrerUser')


//  RUTAS

router.get('/teams/',getTeams )
 // PETICION POR QUERY 
router.get('/drivers/name', getIndependientes)

// TE PIDE  POR  TODO POR GET
router.get('/drivers', getUser)
// TE PIDE  QUE  TE  TRIGA  POR ID DE  API Y DB
router.get('/drivers/:idDriver',userID )
// CREAT UN DRIVERS POST
router.post('/drivers',userPost)
//get teams

 router.delete('/drivers/:idDriver',deleteUser )

 router.put('/drivers/',putUser )
















module.exports = router;



