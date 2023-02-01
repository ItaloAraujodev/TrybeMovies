import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import cartContext from '../../context/Context';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';
import { tratarDate } from '../../utils/date';
import "./search.css"

const Search = () => {

  const imagensMovides = `https://image.tmdb.org/t/p/w500`;
  const { searchResult, setSearchResult } = useContext(cartContext)
  const navigate = useNavigate();
  console.log(searchResult)
  function newRouter(id) {
    navigate(`/movie/${id}`)
  }



  return (
    <div>
      <Nav />
      <div className='container-fluid'>
        <div className='container-search'>
          <div className='search'>
            {searchResult.map((item, index) => (
              <div key={index} className='container-card' onClick={() => navigate(`/movie/${item.id}`)}>
                <div className='card-search'>
                  <div>
                    <img src={`${imagensMovides}${item.poster_path}`} alt={item.title} />
                  </div>
                  <div className='itens'>
                    <h3 style={{ color: 'white' }}>{item.title}</h3>
                    <p style={{ color: '#a9a9ab' }}>{tratarDate(item.release_date)}</p>
                    <p style={{ color: 'white' }}>{item.overview}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search