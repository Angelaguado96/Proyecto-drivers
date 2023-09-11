// const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3002;
const {pedidoTeams}=require('./src/controllers/TeamsControler')


conn.sync({ force: false}).then(async () => {
  await pedidoTeams();
server.listen(PORT, () => {
 
  console.log(`Server listening on port Tigre ${PORT}`);
})
}).catch(error => console.error(error))
