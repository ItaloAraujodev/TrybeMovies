import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import cartContext from '../../context/Context';
import "./search.css"

const Search = () => {

  const imagensMovides = `https://image.tmdb.org/t/p/w500`;
  const { searchResult, setSearchResult } = useContext(cartContext)
  const navigate = useNavigate();

  function newRouter (id) {
    navigate(`/movie/${id}`)
  }


  return (
    <div className='container-fluid'>
      <div className='container-search'>
        <div className='filters'>
          sadsadaaaaaaaaaaa
        </div>

        <div className='search'>
          {console.log(searchResult)}
          {searchResult.map((item, index) => (
            <div key={index} className='container-card' onClick={() => navigate(`/movie/${item.id}`)}>
              <div className='card-search'>
                <div>
                  <img src={`${imagensMovides}${item.poster_path}`} alt="" />
                </div>
                <div className='itens'>
                  <h3 style={{ color: 'white' }}>{item.title}</h3>
                  <p style={{ color: '#a9a9ab' }}>{item.release_date}</p>
                  <p style={{ color: 'white' }}>{item.overview}</p>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}

export default Search