import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiTopRated, apiPopular, apiSearch } from '../../api';
import cartContext from '../../context/Context';
import Card from './Card'
import Nav from '../../components/nav/Nav';

import Footer from '../../components/footer/Footer';

const Home = () => {
  const { topRated, setTopRated } = useContext(cartContext);
  const { popular, setPopular } = useContext(cartContext);
  const { setSearchResult } = useContext(cartContext)
  const { paginacao, setPaginacao } = useContext(cartContext)
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
      <div className='w-full'>
        <div className='flex justify-center mt-14'>
          <input className='w-80 h-9 bg-temp-1 p-3 mr-2 placeholder-white text-white rounded' type="text" onChange={onChange} placeholder='Procure seu filme' />
          <button className='w-24 h-9 rounded text-white bg-temp-1' onClick={searchRedirect}>Search</button>
        </div>
        <div className='w-11/12 m-auto mt-10'>
          <div>
            <h2 className='text-2xl text-white mb-4'>Os Mais Votados</h2>
            <div>
              {!loading ? <Card array={topRated} /> : <h2>Carregando...</h2>}
            </div>
            <h2 className='text-2xl text-white my-4'>Os Mais Populares</h2>
            <div>
              {!loading ? <Card array={popular} /> : <h2>Carregando...</h2>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home