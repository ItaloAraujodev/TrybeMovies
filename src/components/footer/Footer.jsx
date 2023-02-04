import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='w-full h-24 flex items-center justify-center bg-temp text-white mt-6'>
      <div className=' w-7/12 flex flex-col items-center  '>
          <div className='text-center'>
            <p>Todos os direitos reservados</p>
            <p>&copy; Ítalo Araújo - {new Date().getFullYear()}</p>
          </div>

          <div className='flex mt-1'>
            <a href="https://github.com/ItaloAraujodev" target="_blank" style={{ textDecoration: 'none' }}>
              <i className='mr-6'><AiFillGithub /></i>
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