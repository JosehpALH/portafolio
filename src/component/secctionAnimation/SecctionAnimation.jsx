import React from 'react'
import './SecctionAnimation.css'
import item from '../datos/Datos'
import { useRef } from "react";



export const SecctionAnimation = () => {

  const wrapperRef = useRef();

  const mostrar = (indice) => {
    const anchoSlide = wrapperRef.current.offsetWidth / 2; 
    wrapperRef.current.style.transform = `translateX(-${anchoSlide * indice}px)`;
  };

  return (
  
      <section className="SecctionAnimation" id='SecctionAnimation'>

      <ul className='ulBox'>
        <li className='liBox'><a className='aBox' onClick={() => mostrar(0)}>Estudios</a></li>
        <li className='liBox'><a className='aBox' onClick={() => mostrar(1)}>Skillset</a></li>
      </ul>

      <div className="carruselContainer">
        <div className="boxCarrucel" ref={wrapperRef}>

          <div className="slide vistaEstudiso">
            <p className='titleSecctionAnimation'>Estudios</p>
            <p className='estudios'>{item[4].estudios}</p>
        </div>


          <div className="slide vistSkillset">
              <p className='titleSecctionAnimation' >Skillset</p>
              <div className='skillset'>
                <img src={item[4].imgHtml} alt="" className="imgSkillset" />
                <img src={item[4].imgCSS} alt="" className="imgSkillset" />
                <img src={item[4].imgJS} alt="" className="imgSkillset" />
                <img src={item[4].imgBoostrap} alt="" className="imgSkillsetB" />
              </div>

              <p className='titleSecctionAnimation'>Framework</p>

              <div className='framework'>
              <img src={item[4].imgReact} alt="" className="imgSkillsetR" />
            </div>
          </div>

        </div>
      </div>
    </section>
    );
}
