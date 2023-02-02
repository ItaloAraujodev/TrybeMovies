import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-20 flex justify-center items-center bg-temp'>
      <div className='w-11/12 flex items-end'>
        <div>
          <h1 className='text-white text-3xl'><a href="/">TrybeMovie</a></h1>
        </div>
        <div className=' text-white flex items-center ml-4'>
          <ul>
            <li className='inline-block mr-2'>
              <a href="">Filmes</a>
            </li>
            <li className='inline-block'>
              <a href="">Séries</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav