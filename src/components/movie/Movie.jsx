import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiDetails } from '../../api';
import Loading from '../loading/Loading';
import { formatDateDia, converter } from '../../utils/date'
import './style.css';

const Movie = () => {
  const imagensMovides = `https://image.tmdb.org/t/p/w500`;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const handle = async () => {
      const detalhes = await apiDetails(id)
      setDetails(detalhes)
      setLoading(false)
    }

    handle()

  }, [id])

  return (
    <div className='container-fluid'>
      {console.log(details)}
      {console.log(loading)}
      {!loading ? <div className='container-conteudo'>
        <div>
          <img src={`${imagensMovides}${details.poster_path}`} alt={details.title} className='img-details shadow' />
        </div>

        <div>
          <h2 className='title'>{details.title} <span>({details.release_date.split('-')[0]})</span></h2>
          <p className='paragrafo-2'>{formatDateDia(details.release_date)} ({details.production_countries[0].iso_3166_1}) - {!loading ? details.genres.map((item, index) => (
            <span key={index} className='ms-2'>{item.name}</span>
          )) : <Loading />} <span className='ms-2'>{converter(details.runtime)}</span></p>
          <p className='tagLine'>{details.tagline}</p>
          <div className='sinope-context'>
            <h5>Sinopse</h5>
            <p>{details.overview}</p>
          </div>
        </div>
      </div> : <Loading />}
    </div>
  )
}

export default Movie