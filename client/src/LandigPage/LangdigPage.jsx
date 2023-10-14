import React from 'react'
import './LadingPage.css'

import { Link } from 'react-router-dom'
import logo from '../image/logooooo.png'
import driver1 from '../image/driver1.avif'
import driver2 from '../image/driver2.avif'
import driver3 from '../image/driver3.avif'
import driver4 from '../image/driver4.avif'
import driver6 from '../image/drivers6.avif'
import driver5 from '../image/drivers5.avif'
import { Toaster, toast } from 'react-hot-toast';



const LangdigPage = () => {


  return (

    <div className='fondo'>


      <div className='boxLogo'>
        <img className='log' src={logo} alt="iamgen" />
      </div>

      <div className='Bienvenida'>
        <h2 className='info'>

          Meet the Best
          Formula 1 Drivers of 2024
        </h2>

        <br />
        <p className='tx'>
          Desde hoy las reglas cambiarán significativamente  la competicion es  fuerte pues las reglas tambien tambien lo son este año no habra límites correremos hata llegar a la meta y la
          fundicion habrá una gran reorganización para los equipos existentes y nuevos competidores  asi que  preparate por que  ya EMPEZO LA CARRERA ..!!!
        </p>
      </div>
      <div>
        <Link to='/home'>

          <button  className='botonDelanding'>
            Que Empieze la carrera..!!</button>
          <Toaster />
        </Link>

      </div>

      <div className='boxDrivers'>

        <div className='driver1'>
          <img className='image1' src={driver1} alt="iamgen" />
        </div>
        <div className="driver2">
          <img className='image2' src={driver2} alt="iamgen" />
        </div>
        <div className="driver3">
          <img className='image3' src={driver3} alt="iamgen" />
        </div>
        <div className="drivers4">
          <img className='image4' src={driver4} alt="iamgen" />
        </div>
        <div className="driver5">
          <img className='image5' src={driver5} alt="iamgen" />
        </div>
        <div className="driver6">
          <img className='image6' src={driver6} alt="iamgen" />
        </div>
      </div>


    </div>

  )
}

export default LangdigPage
