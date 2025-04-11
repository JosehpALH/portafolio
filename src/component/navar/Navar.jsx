import React from 'react'
import './Navar.css'
import item from '../datos/Datos'

export const Navar = () => {
  return (

    
 
    <nav class="navar">

      <div class="boxLogo">
        <p class="textLogo">{item[0].logo}</p>
      </div>

      <input type="checkbox" id="toggle" class="inputMenu" />
      <label for="toggle" class="hamburger">
        <span class="linea"></span>
        <span class="linea"></span>
        <span class="linea"></span>
      </label>

      <ul class="ul">
        <li class="li"><a class="a" href="#SecctionTwo">Sobre Mi</a></li>
        <li class="li"><a class="a" href="#SecctionAnimation">previos</a></li>
        <li class="li"><a class="a" href="/Josehp Launga.docx"
    download
    target="_blank"
    rel="noopener noreferrer">CV</a></li>
        <li class="li"><a class="a" href="https://wa.me/51932576707?text=¡Hola!%20Quiero%20hablar%20contigo%20por%20WhatsApp"
    target="_blank"
    rel="noopener noreferrer">whatsapp</a></li>
      </ul>
  </nav>
  )
}


export default Navar;