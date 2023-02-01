import React from 'react'
import './navStyle.css';

const Nav = () => {
  return (
    <div className='d-flex justify-content-start align-items-center p-4 container-fluid bg'>
      <div className='container-nav'>
        <h2><a href="/">TrybeMovie</a></h2>
        <div className='d-flex lista-container'>
          <ul className='d-flex'>
            <li><a href="/filmes">Filmes</a></li>
            <li><a href="/series">Series</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav