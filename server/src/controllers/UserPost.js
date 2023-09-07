const { Driver } = require('../db')




const posteos = async (
   forename, 
   surename,
    description, 
    image, 
    dob,
     nationality,
     teamsId,
     teams
     ) => {

   
   if (!image) {
         image ='https://i.pinimg.com/564x/d7/aa/56/d7aa56e8f5ea76e2f13e135fc3018f4e.jpg'
      
   }
   const newDrivers = await Driver.create({
      forename,
      surename,
      description,
      image,
      dob,
      nationality,
      teams
   })


  await newDrivers.addTeams (teamsId)
 

   return newDrivers

}







module.exports = { posteos }



