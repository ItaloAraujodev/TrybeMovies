import React, { useContext, useState, useEffect } from 'react'
import Card from './card'
import cartContext from '../../context/context';
import { apiTopRated, apiPopular } from '../../api';

import './homeStyle.css';

const Home = () => {
  const { topRated, setTopRated } = useContext(cartContext);
  const { popular, setPopular } = useContext(cartContext);
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    const handle = async () => {
      const top = await apiTopRated()
      setTopRated(top)
      setLoading(true)
    }
    handle()
  }, [])

  useEffect(() => {
    const handlePopular = async () => {
      const popular = await apiPopular()
      setPopular(popular)
      setLoading(true)
    }
    handlePopular()
  }, [])


  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-5'>
        <input className='input' type="text" placeholder='Procure seu filme' />
        <button className='btn-home'>Search</button>
      </div>
      <div className='container-fluid container-1'>
        <h2 className='title'>Mais Votado</h2>

        <div>
          {loading ? <Card array={topRated} /> : <h2>Carregando...</h2>}
        </div>
        
        <h2 className='title mt-4'>Mais Popular</h2>

        <div>
          {loading ? <Card array={popular} /> : <h2>Carregando...</h2>}
        </div>

      </div>
    </div>
  )
}

export default Home