const IMAGE = 'https://i.pinimg.com/564x/a9/18/b1/a918b1826133f4759b30e069a0ed19eb.jpg'
const axios = require('axios')
const { Driver } = require('../db')





// GET | /drivers Obtiene un arreglo de objetos, donde cada objeto es un driver con su información.
//IMPORTANTE: Si un driver no tiene imagen, deberás colocarle una por defecto 🖼️

 // AQUI LIMPIO  LA INFORMACIOM QUE VOY A USAR PARA HACER UN PEDIDO EN FRONT END
const cleanArray = (arr) => {
 

  const clean = arr.map((elem) => {
    return {
      id: elem.id,
      forename: elem.name.forename,
      surename: elem.name.surname,
      description: elem.description,
      image: elem.image.url ,
      nationality: elem.nationality,
      dob: elem.dob,
      teams: elem.teams,
      created: false,
    };
  });
  return clean;
};



// AQUI  HAGO  UN PETICION  DE  API  CON TODO  LOS  DRIVER Y DE LA BASE DE DATOS 
const getDrivers = async () => {
  const dataDriver = await Driver.findAll()

  const response = await axios.get(`http://localhost:5000/drivers`);
  const drivers = response.data
  if (!drivers) throw Error(`No se encontraron personajes`);
  //   AQUI LE PASO EL PARAMETRO  LA INFO  AL ARRAY 
  const apDriver = cleanArray(drivers);

  const defectos = apDriver.map((driver) => {
    
    if (!driver.image ) {
      return {
        ...driver,
          image: IMAGE
      }
    }
    return driver
  })
  return [...dataDriver, ...defectos]
}
// se exporta a Handler

module.exports = { getDrivers }

