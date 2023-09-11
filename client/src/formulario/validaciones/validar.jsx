import React from 'react'

const validar = (data) => {

   let error = {}
   
   if (data.forename.length > 20) {
      error.forename = 'solo es permitido  10 caracteres'
   }
   if (data.surename.length > 20) {
      error.surename = 'solo es permitido  10 caracteres'
   }
   // if (!data.image) {
   //    error.image = 'campo obligatorio'
   // }
   if (data.description.length > 30) {
      error.description = 'solo es permitido  30 caracteres'
   }
   if (!data.nationality) {
      error.nationality = 'campo obligatorio'
   }
   if (!data.dob) {
      error.dob = 'campo obligatorio'
   }

   return error

}

export default validar