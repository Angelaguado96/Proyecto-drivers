const URL = 'http://localhost:5000/drivers'
const axios = require('axios')
const { Driver} = require('../db')







const DetailControll = async (idDriver) => {
   
  
  //  PETICION DE  EL API
  if ((!isNaN (idDriver))) {
    const response = await axios(`${URL}/${idDriver}`)
    const reDeApi = response.data
    //aqui restructuro  la  info  para  usarlo en Detail de  el front end 
    const restrucure = {
      id: reDeApi.id,
      forename: reDeApi.name.forename,
      surename: reDeApi.name.surname,
      description: reDeApi.description,
      image: reDeApi.image.url,
      nationality: reDeApi.nationality,
      dob: reDeApi.dob,
      teams: reDeApi.teams,
    }
    
    return restrucure
    
    
  }else{
    
    
     if((isNaN (idDriver))){

       const buscadorDivers = await Driver.findByPk(idDriver)
       if (!buscadorDivers.length=== 0) throw Error(`no se enconto el ${idDriver}`)
         if (buscadorDivers) return buscadorDivers
     }
  }
  
  
}




module.exports = { DetailControll }
// 