import React from 'react'
import "./footer.css"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>
      <p>Todos os direitos reservados</p>
      <p>&copy; Ítalo Araújo - {new Date().getFullYear()}</p>
      <div className='icones'>
        <a href="https://github.com/ItaloAraujodev" target="_blank" style={{ textDecoration: 'none' }}>
          <button className='icon'><AiFillGithub /></button>
        </a>

        <a href="https://www.linkedin.com/in/italoaraujodev/" target="_blank" style={{ textDecoration: 'none' }}>
          <button className='icon'><AiFillLinkedin /></button>
        </a>
      </div>
    </div>
  )
}

export default Footer