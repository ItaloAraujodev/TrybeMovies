import React from 'react'
import Card from '../card'

import './homeStyle.css';


const Home = () => {

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-5'>
        <input className='input' type="text" placeholder='Procure seu filme' />
        <button className='btn-home'>Search</button>
      </div>
      <div className='container-fluid container-1'>
        <h2 className='title'>Os Mais Populares</h2>
        <div>
          <Card />
        </div>

      </div>
    </div>
  )
}

export default Home