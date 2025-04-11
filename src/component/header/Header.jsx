import React from 'react'
import './Header.css'
import item from '../datos/Datos'
import Particles from '../../blocks/Backgrounds/Particles/Particles'

export const Header = () => {
  return (
    <div className='box'>

<div style={{ width: '100%', height: '100%', position: 'absolute'}}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={1000}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={false}
  />
</div>

      <div className='boxImg'>
        <div className='miniBoxImg'></div>

        <img src={item[1].imagen} alt="Foto deperfil" className="yo" />
      </div>

      <div className='boxName'>
          <p className='nom'>{item[1].nombre}</p>
          <p className='nom dostext'>{item[1].apellido}</p>
          <p className='fron'>{item[1].fro}</p>
      </div>

    </div>
  )
}
