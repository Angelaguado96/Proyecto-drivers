 const axios = require("axios");
const server = require("./src/server");
const { conn } = require('../server/src/db'); //  base de DB
 const PORT = 3002;
const {pedidoTeams}=require('./src/controllers/TeamsControler') // DB


conn.sync({ force: false}).then(async () => {
  await pedidoTeams(); // cargo  lo teams ala base de datos cuanddo  predo el servidor  
server.listen(PORT, () => {
 
  console.log(`Server listening on port Tigre ${PORT}`);
})
}).catch(error => console.error(error))
