const { Driver } = require('../db')




const posteos = async (
   forename,
   surename,
   description,
   image,
   dob,
   nationality,
   teams,

) => {


   if (!image) {
      image = 'https://i.pinimg.com/564x/d7/aa/56/d7aa56e8f5ea76e2f13e135fc3018f4e.jpg'

   }

   try {

      const newDrivers = await Driver.create({
         forename,
         surename,
         description,
         image,
         dob,
         nationality,

      })

      await Promise.all(teams?.map(async function (item) {

         if (!newDrivers) return;
         if (newDrivers) {

            await newDrivers.addTeams(item)
         }
      }))
   } catch (error) {
      console.log(error)

   }



   return {}

}







module.exports = { posteos }



