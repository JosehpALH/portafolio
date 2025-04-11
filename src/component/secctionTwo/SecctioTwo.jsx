import React from 'react'
import './SecctionTwo.css'
import item from '../datos/Datos'
import Particles from '../../blocks/Backgrounds/Particles/Particles'



export const SecctioTwo = () => {
  return (
    
<div className='start' id='SecctionTwo'>
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
  
 <p className='titleMi'>{item[3].tituloSobreMi}</p>

  <div className='boxStart'>
    <p className='mi'>{item[3].sobreMi}</p>
  </div>


</div>
  )
}
