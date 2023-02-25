import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import cartContext from '../../context/Context';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import { tratarDate } from '../../utils/date';
import { getImage } from '../../utils/api';

const Search = () => {

  const { searchResult, setSearchResult } = useContext(cartContext)
  const navigate = useNavigate();


  return (
    <div>
      
      <Nav />
      <div className='w-11/12 mx-auto mt-10'>
          <div className='search'>
            {searchResult.results.map((item, index) => (
              <div key={index} className='w-full grid grid-cols-10 mb-8 border bg-temp rounded-md ' onClick={() => navigate(`/movie/${item.id}`)}>
                  <div className='col-span-1'>
                    <img src={`${getImage(item.poster_path)}`} alt={item.title} className=" rounded-md" />
                  </div>
                  <div className='col-span-9 flex flex-col justify-center ml-8'>
                    <h3 className='w-3/4 text-white text-3xl font-semibold'>{item.title}</h3>
                    <p className='text-temp-1 font-bold' >{tratarDate(item.release_date)}</p>
                    <p className='w-11/12 mt-4 text-white font-light'>{item.overview}</p>
                  </div>

              </div>
            ))}
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search