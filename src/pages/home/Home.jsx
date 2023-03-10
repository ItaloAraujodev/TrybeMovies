import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiTopRated, apiPopular, apiSearch } from '../../utils/api';
import cartContext from '../../context/Context';
import Card from './Card'
import Nav from '../../components/nav/Nav';

import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';

const Home = () => {
  const { topRated, setTopRated } = useContext(cartContext);
  const { popular, setPopular } = useContext(cartContext);
  const { setSearchResult } = useContext(cartContext)
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState();

  const navigate = useNavigate();

  const onChange = ({ target }) => {
    const { value } = target;
    setSearch(value)
  }

  const searchRedirect = async () => {
    const result = await apiSearch(search);
    console.log(result)
    if (!loading && result.results.length > 0) {
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
      <main className='md:w-full'>
        <div className='md:flex md:justify-center md:mt-14'>
          <input className='md:w-96 md:h-9 bg-temp-1 p-4 placeholder-white text-white  focus:outline-none rounded-full' type="text" onChange={onChange} placeholder='Procure seu filme' />
          <button className='md:w-28 md:h-9 md:-ml-10 text-white font-bold bg-temp rounded-full' onClick={searchRedirect}>Search</button>
        </div>
        {!loading ? <div className='md:w-11/12 md:m-auto md:mt-10'>
          <div>
            <div>
              <h2 className='text-2xl text-white md:mb-4'>Os Mais Votados</h2>
              <Card array={topRated} />
            </div>
            <div>
              <h2 className='text-2xl text-white md:my-4'>Os Mais Populares</h2>
              <Card array={popular} />
            </div>
          </div>
        </div> : <Loading />}
      </main>
      {!loading ? <Footer /> : ''}
    </>
  )
}

export default Home