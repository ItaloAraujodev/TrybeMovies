import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiTopRated, apiPopular, apiSearch } from '../../api';
import cartContext from '../../context/Context';
import Card from './Card'
import Nav from '../../components/nav/Nav';

import './homeStyle.css';
import Footer from '../../components/footer/Footer';

const Home = () => {
  const { topRated, setTopRated } = useContext(cartContext);
  const { popular, setPopular } = useContext(cartContext);
  const { setSearchResult } = useContext(cartContext)
  const { paginacao , setPaginacao } = useContext(cartContext)
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState();

  const navigate = useNavigate();

  const onChange = ({ target }) => {
    const { value } = target;
    setSearch(value)
  }

  const searchRedirect = async () => {
    const result = await apiSearch(search);

    if (result.results.length > 0) {
      setSearchResult(result)
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
    <>
      <Nav />
      <div className='container-fluid'>
        <div className='d-flex justify-content-center mt-5'>
          <input className='input' type="text" onChange={onChange} placeholder='Procure seu filme' />
          <button className='btn-home' onClick={searchRedirect}>Search</button>
        </div>
        <div className='container-fluid container-1 mt-5'>
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
      <Footer />
    </>
  )
}

export default Home