import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='w-full h-24 mt-6 flex items-center justify-center bg-temp text-white '>
      <div className=' w-7/12 flex flex-col items-center'>
        <p>Todos os direitos reservados</p>
        <p>&copy; Ítalo Araújo - {new Date().getFullYear()}</p>

        <div className='flex mt-2'>
          <a href="https://github.com/ItaloAraujodev" className='mr-2' target="_blank" style={{ textDecoration: 'none' }}>
            <i className=''><AiFillGithub /></i>
          </a>

          <a href="https://www.linkedin.com/in/italoaraujodev/" target="_blank" style={{ textDecoration: 'none' }}>
            <i><AiFillLinkedin /></i>
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer