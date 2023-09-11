const URL = 'http://localhost:5000/drivers'
const axios = require('axios')
const { Driver } = require('../db')
const IMAGE = 'https://i.pinimg.com/564x/a9/18/b1/a918b1826133f4759b30e069a0ed19eb.jpg'






const DetailControll = async (idDriver) => {


  //  PETICION DE  EL API
  if ((!isNaN(idDriver))) {
    const response = await axios(`${URL}/${idDriver}`)
    const reDeApi = response.data
    //aqui restructuro  la  info  para  usarlo en Detail de  el front end 
    
    const restrucure = {
      id: idDriver,
      forename: reDeApi.name.forename,
      surename: reDeApi.name.surname,
      description: reDeApi.description ||'soy el mejor',
      image: reDeApi.image.url || 'https://i.pinimg.com/564x/a9/18/b1/a918b1826133f4759b30e069a0ed19eb.jpg' ,
      nationality: reDeApi.nationality,
      dob: reDeApi.dob,
      teams: reDeApi.teams||'McLaren',
    }
    
    
    console.log(restrucure)
    
    return restrucure
  
  }
 
  
  

  if ((isNaN(idDriver))) {

    const buscadorDivers = await Driver.findOne({where :{id:idDriver}})
    return buscadorDivers
  }
}







module.exports = { DetailControll }
// 