import React from 'react'
import "./footer.css"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-items'>
        <div>
          <p>Todos os direitos reservados</p>
          <p>&copy; Ítalo Araújo - {new Date().getFullYear()}</p>
        </div>

        <div className='icones'>

          <a href="https://github.com/ItaloAraujodev" target="_blank" style={{ textDecoration: 'none' }}>
            <i className='icon'><AiFillGithub /></i>
          </a>

          <a href="https://www.linkedin.com/in/italoaraujodev/" target="_blank" style={{ textDecoration: 'none' }}>
            <i className='icon'><AiFillLinkedin /></i>
          </a>

        </div>
      </div>

    </div>
  )
}

export default Footer