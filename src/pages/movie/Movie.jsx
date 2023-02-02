import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiDetails } from '../../api';
import Loading from '../../components/loading/Loading';
import { formatDateDia, converter } from '../../utils/date'
import './style.css';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

const Movie = () => {
  const imagensMovides = `https://image.tmdb.org/t/p/w500`;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const handle = async () => {
      const detalhes = await apiDetails(id)
      setDetails(detalhes)
      setLoading(false)
    }

    handle()

  }, [id])

  const jointDetails = () => {
    const array = [];
    const detalhes = !loading ? details.genres.map((item) => {
      array.push(item.name)
    }) : <Loading />

   return array.join(', ');
  }

  

  return (
    <div>
      <Nav />
      <div className='container-fluid'>
      {!loading ? <div className='container-conteudo'>
        <div>
          <img src={`${imagensMovides}${details.poster_path}`} alt={details.title} className='img-details shadow' />
        </div>

        <div>
          <h2 className='title'>{details.title} <span>({details.release_date.split('-')[0]})</span></h2>
          <p className='paragrafo-2'>{formatDateDia(details.release_date)} <span className='ms-2'>-</span><span className='ms-2'>{jointDetails()}</span><span className='ms-2'>•</span> <span className='ms-2'>{converter(details.runtime)}</span></p> 
          <p className='tagLine'>{details.tagline}</p>
          <div className='sinope-context'>
            <h5>Sinopse</h5>
            <p>{details.overview}</p>
          </div>
        </div>
      </div> : <Loading />}
    </div>
    <Footer />
    </div>
  )
}

export default Movie