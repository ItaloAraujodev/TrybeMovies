import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from './Card'
import cartContext from '../../context/Context';
import { apiTopRated, apiPopular, apiSearch } from '../../api';

import './homeStyle.css';

const Home = () => {
  const { topRated, setTopRated } = useContext(cartContext);
  const { popular, setPopular } = useContext(cartContext);
  const [loading, setLoading] = useState(true);
  const [search, setSearch ] = useState();
  const navigate = useNavigate();

  const onChange = ({target}) => {
    const { value } = target;
    setSearch(value)
  }

  const searchRedirect = async () => {
    const result = await apiSearch(search);
    console.log(result);

    if(result.results.length > 0){
      navigate('/search')
    }
  }

  useEffect(() => {
    const handle = async () => {
      const top = await apiTopRated()
      const popular = await apiPopular()
      setTopRated(top)
      setPopular(popular)
      setLoading(false)
    }
    handle()
  }, [])

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center mt-5'>
        <input className='input' type="text" onChange={ onChange } placeholder='Procure seu filme' />
        <button className='btn-home' onClick={ searchRedirect }>Search</button>
      </div>
      <div className='container-fluid container-1'>
        <h2 className='title'>Os Mais Votados</h2>
        <div>

          {!loading ? <Card array={topRated} /> : <h2>Carregando...</h2>}
        </div>
        
        <h2 className='title mt-4'>Os Mais Populares</h2>

        <div>
          {!loading ? <Card array={popular} /> : <h2>Carregando...</h2>}
        </div>

      </div>
    </div>
  )
}

export default Home