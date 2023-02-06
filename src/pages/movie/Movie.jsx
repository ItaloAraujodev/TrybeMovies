import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fotoIndis from '../../assets/fotoIndis.svg';
import { apiDetails, apiElenco } from '../../api';
import Loading from '../../components/loading/Loading';
import { formatDateDia, converter } from '../../utils/date'
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import Grafico from '../home/Grafico';

const Movie = () => {
  const imagensMovides = `https://image.tmdb.org/t/p/w500`;
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [elenco, setElenco] = useState([]);
  const { id } = useParams();
  const back = details.backdrop_path

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

  console.log(details)
  return (
    <>
      <Nav />
      <div className='w-full py-12 bg-no-repeat bg-cover bg-center shadow-backPath ' style={{ backgroundImage: `url(${imagensMovides}${back})` }}>
        {!loading ? <div className='w-11/12 flex mx-auto text-white' >
          <div className='w-72'>
            <img src={`${imagensMovides}${details.poster_path}`} alt={details.title} className='w-full rounded-md' />
          </div>

          <div className='w-8/12 flex flex-col justify-center ml-3 p-3'>
            <div>
              <h2 className='text-3xl mt-2 font-bold'>{details.title} <span>({details.release_date.split('-')[0]})</span></h2>
              <p className='text-sm font-light mb-3'>{formatDateDia(details.release_date)} <span className='ms-2'>- </span><span className='ms-2'>{jointDetails()}</span><span className='ms-2'> •</span> <span className='ms-2'>{converter(details.runtime)}</span></p>
            </div>
            <div className='flex items-center'>
              <div className='w-10 h-11 my-3'>
                <Grafico item={details.vote_average} />
              </div>

              <div className='mx-8'>
                <h3 className='font-bold leading-4'>Quantidade de votos</h3>
                <p>{details.vote_count}</p>
              </div>

              <div>
                  <h3 className='font-bold leading-4'>Popularidade</h3>
                  <p>{details.popularity}</p>
              </div>

            </div>
            <p className='italic text-white mb-3'>{details.tagline}</p>
            <div>
              <h3 className='text-2xl mb-3 font-bold'>Sinopse</h3>
              <p className='font-light'>{details.overview}</p>
            </div>
          </div>
        </div> : <Loading />}
      </div>
      <h2 className='w-11/12 text-white text-2xl mx-auto my-7'>Elenco principal</h2>
      {!loading ? <div className='flex w-11/12 mx-auto scrollbar-thin scrollbar-thumb-temp scrollbar-track-temp-1 overflow-x-auto'>
        <div className='flex mb-7 '>
          {elenco.cast.map((item, index) => (
            <div key={index} className="w-44 h-72 mr-3 bg-temp rounded" >
              <div>
                <img src={item.profile_path === null ? fotoIndis : `${imagensMovides}${item.profile_path}`} alt="" className='w-full h-48 object-cover rounded-t' />
              </div>
              <div className=' p-2'>
                <p className='text-white text-base'>{item.original_name}</p>
                <p className='text-temp-1 text-sm'>{item.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div> : <Loading />}
      <Footer />
    </>
  )
}

export default Movie