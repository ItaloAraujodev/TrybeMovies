import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cartContext from '../../context/Context';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';
import { tratarDate } from '../../utils/date';
import { useEffect } from 'react';
import { apiSearch } from '../../api';

const Search = () => {

  const imagensMovides = `https://image.tmdb.org/t/p/w500`;
  const { searchResult, setSearchResult } = useContext(cartContext)
  const navigate = useNavigate();


  return (
    <div>
      
      <Nav />
      <div className='container-fluid'>
        <div className='container-search'>
          <div className='search'>
            {searchResult.results.map((item, index) => (
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