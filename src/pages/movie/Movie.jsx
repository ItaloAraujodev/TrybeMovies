import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiDetails, apiElenco } from '../../api';
import Loading from '../../components/loading/Loading';
import { formatDateDia, converter } from '../../utils/date'
import './style.css';
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';

const Movie = () => {
  const imagensMovides = `https://image.tmdb.org/t/p/w500`;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [elenco, setElenco] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const handle = async () => {
      const detalhes = await apiDetails(id)
      const elenco = await apiElenco(id)

      setDetails(detalhes)
      setElenco(elenco)
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

  const array = elenco.cast.slice(0, 15)
  console.log(array)

  return (
    <div>
      <Nav />
      <div className=''>
        <div className='backdor'>
          {!loading ? <div className='container-conteudo '>
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
        <h2>Elenco principal</h2>
        <div className='elenco-container '>
          <div className='elenco-conteudo'>
              {/* <div className="card-elenco" >
                <img src={`${imagensMovides}${elenco.cast[0].profile_path}`} alt="" />
                  <h4>{elenco.cast[0].name}</h4>
              </div>

              <div className="card-elenco" >
              <img src={`${imagensMovides}${elenco.cast[1].profile_path}`} alt="" />
                  <h4>{elenco.cast[1].name}</h4>
              </div>

              <div className="card-elenco" >
                  <h4>{elenco.cast[2].name}</h4>
              </div> */}

            {array.map((item, index) => (
              <div key={index} className="card-elenco" >
                <p>${item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Movie