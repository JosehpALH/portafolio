import React from 'react'
import './SecctionOne.css'
import item from '../datos/Datos'

export const SecctionOne = () => {
  return (
    <section className='sectionOne' id='SectionOne'>
      <div className='medioCirculo'>
        <p className='intro'>{item[2].intro}</p>
      </div>
      
        <div className='circulosInfinit'>

          <div className='uno'></div>
          <div className='dos'></div>
          <div className='tres'></div>
          <div className='cuatro'></div>
          <div className='cinco'></div>
          <div className='seis'></div>
          <div className='siete'></div>

        </div>
    </section>
  )
}
