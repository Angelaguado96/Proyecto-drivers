const {Driver} = require('../db')


const actulizaUser= async( 
   id,
   name,
   Apellido,
   Descripción,
   Imagen,
   Fecha_de_Nacimiento,
   Nacionalidad,
   teamsId)=>{

   const userFind = await Driver.update(
      { name: name, Apellido: Apellido, Descripción: Descripción,Imagen:Imagen,Fecha_de_Nacimiento:Fecha_de_Nacimiento,Nacionalidad:Nacionalidad,teamsId:teamsId
      },
      { where: { id: id } }
  );

  if (!userFind) {
      return { error: 'Usuario inexistente' };
  } else {
      return {message:'se actualizo'};
  }

}

module.exports = {actulizaUser}
