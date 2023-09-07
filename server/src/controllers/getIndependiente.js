
const axios = require('axios')
const { Driver } = require('../db')
const { Op } = require("sequelize");


//  PETICION A LA BASE DE DATOS  LOS 15 
const buscarBD = async (name) => {

   const nombresConverido= name.toUpperCase().charAt(0)+name.slice(1).toLowerCase();
   
   const buscadorDeName = await Driver.findAll({
      where: {
         forename: {
            [Op.iLike]: `%${name}`
         }
      },
      limit: 15
   })
   
   if (buscadorDeName.length >= 15) {
      buscadorDeName
   }
   

   const URL = `http://localhost:5000/drivers?name.forename=${nombresConverido}`
   const dataaa = (await axios.get(`${URL}`)).data
  
   if(dataaa.length==0) throw Error (`el nombre no existe ${nombresConverido}`)
   
   const NewDataa = dataaa.map((elem) => ({
      id: elem.id,
      forename: elem.name.forename,
      surename: elem.name.surname,
      description: elem.description,
      image: elem.image.url,
      nationality: elem.nationality,
      dob: elem.dob,
      teams: elem.teams,
      created: false,
      
   }))
   
  
   const filtrado = NewDataa.filter((driver) => driver.forename.toLowerCase() === name.toLowerCase())
     

   const completado = 15 - buscadorDeName.length
   const lites15 = filtrado.slice(0,completado)

   return [...buscadorDeName,...lites15]

}

module.exports = { buscarBD }





// 