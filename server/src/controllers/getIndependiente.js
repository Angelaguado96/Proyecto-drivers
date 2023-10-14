
const axios = require('axios')
const { Driver,Teams } = require('../db')
const { Op } = require("sequelize");


//  PETICION A LA BASE DE DATOS  LOS 15 
const buscarBD = async (name) => {
 //  convierto  en  miniscla  y  solo la primera letras en mayuscula 
   const nombresConverido =
      name.toUpperCase().charAt(0) + name.slice(1).toLowerCase();



   // console.log('base de datso ' + name)

   const buscadorDeName = await Driver.findAll({
      where: {
         forename: {
            [Op.iLike]: `%${name}%`
         }
      },  include:{model: Teams ,attributes: ['name'], through: { attributes: [] } },
      limit: 15
   })




 //  que me traiga  los  15 de  la base de datos 
   if (buscadorDeName.length >= 15) {
      return buscadorDeName
   }





   const URL = `http://localhost:5000/drivers?name.forename=${nombresConverido}`
   const dataaa = (await axios.get(`${URL}`)).data



  //  restructuro la  infomacion
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

  // aqui le digo que me complete con la del api sis que hay  
   const completado = 15 - buscadorDeName.length
   const lites15 = filtrado.length > 0 ? filtrado.slice(0, completado) : []

   if (buscadorDeName.length === 0 && filtrado.length === 0) {
      return [];

   }

   return [...buscadorDeName, ...lites15]

}






module.exports = { buscarBD }





