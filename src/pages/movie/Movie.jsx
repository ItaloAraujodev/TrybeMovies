import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fotoIndis from '../../assets/fotoIndis.svg';
import { apiDetails, apiElenco, getImage } from '../../api';
import Loading from '../../components/loading/Loading';
import { formatDateDia, converter } from '../../utils/date'
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import Grafico from '../home/Grafico';

const Movie = () => {
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

  //Função para tratar o Array de generos e colocar  " , "
  const tratandoGeneros = () => {
    const array = [];
    !loading ? details.genres.map((item) => {
      array.push(item.name)
    }) : <Loading />

    return array.join(', ');
  }

  return (
    <>
      <Nav />
      <div className='md:w-full md:py-12  bg-no-repeat bg-cover rounded-md bg-center shadow-backPath' style={{ backgroundImage: `url(${getImage(details.backdrop_path)})` }}>
        {!loading ? <div className='md:w-11/12 flex mx-auto text-white' >
          <div className='md:w-80 transition duration-500 hover:scale-105'>
            <img src={`${getImage(details.poster_path)}`} alt={details.title} className='md:w-full rounded-md' />
          </div>

          <div className='md:w-8/12 md:flex md:flex-col md:justify-center md:ml-3 md:p-3'>
            <div>
              <h2 className='text-3xl md:mt-2 font-bold'>{details.title} <span>({details.release_date.split('-')[0]})</span></h2>
              <p className='text-sm font-light md:mb-3'>{formatDateDia(details.release_date)} - <span className='ms-2'>{tratandoGeneros()}</span><span className='ms-2'> • </span> <span className='ms-2'>{converter(details.runtime)}</span></p>
            </div>
            <div className='flex items-center'>
              <div className='md:w-10 md:h-11 md:my-3'>
                <Grafico item={details.vote_average} />
              </div>

              <div className='md:mx-8'>
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
              <h3 className='text-2xl md:mb-3 font-bold'>Sinopse</h3>
              <p className='font-light'>{details.overview}</p>
            </div>
          </div>
        </div> : <Loading />}
      </div>

            
      <h2 className='md:w-11/12 text-white text-2xl md:mx-auto md:my-7'>Elenco principal</h2>
      {!loading ? <div className='flex md:w-11/12 md:mx-auto scrollbar-thin scrollbar-thumb-temp scrollbar-track-temp-1 overflow-x-auto'>
        <div className='flex mb-7 '>
          {elenco.cast.map((item, index) => (
            <div key={index} className="md:w-44 md:h-72 md:mr-3 border border-temp rounded-md" >
              <div>
                <img src={item.profile_path === null ? fotoIndis : `${getImage(item.profile_path)}`} alt={ item.original_name } className='md:w-full h-48 object-cover rounded-t' />
              </div>
              <div className='md:p-2'>
                <p className='text-white md:text-base'>{item.original_name}</p>
                <p className='text-white md:font-light md:text-xs'>{item.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div> : <Loading />}
      {!loading ? <Footer /> : <Loading />}
    </>
  )
}

export default Movie