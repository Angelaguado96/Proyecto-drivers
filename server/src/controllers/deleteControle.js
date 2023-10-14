
const { Driver } = require('../db')


// solo es alimar por base de  datos 

const delUser = async (id) => {
  console.log(typeof id)
   const usuario = await Driver.destroy({ where: {id} })
   if (!usuario) return ('no se encontro el id ')
   else {
      return {message:'se elimino con exito'}
   }
   
   
}





module.exports = {
   delUser
}
