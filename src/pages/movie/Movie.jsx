import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fotoIndis from '../../assets/fotoIndis.svg';
import { apiDetails, apiElenco, getImage, getResenhas, getPalavrasChaves, getRecomendations } from '../../utils/api';
import Loading from '../../components/loading/Loading';
import { formatDateDia, converter } from '../../utils/date'
import Footer from '../../components/footer/Footer';
import Nav from '../../components/nav/Nav';
import Grafico from '../home/Grafico';
import Movies from '../../components/Movies/MovieResenhas';
import MovieDetailsLateral from '../../components/Movies/MovieDetailsLateral';
import './style.css';

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const [elenco, setElenco] = useState([]);
  const [resenhas, setResenhas] = useState()
  const [palavrasChaves, setPalavrasChaves] = useState([])
  const [recomendations, setRecomendations] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const handle = async () => {
      const detalhes = await apiDetails(id)
      const elenco = await apiElenco(id)
      const resenhas = await getResenhas(id)
      const palavrasChaves = await getPalavrasChaves(id)
      const recomends = await getRecomendations(id)
      setDetails(detalhes)
      setRecomendations(recomends)
      setElenco(elenco)
      setResenhas(resenhas)
      setPalavrasChaves(palavrasChaves)
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

  //console.log(details)
  return (
    <>
      <Nav />
      <div className='md:w-full md:py-12  bg-no-repeat bg-cover shadow-backPath rounded-md bg-center imagem' style={{ backgroundImage: `url(${getImage(details.backdrop_path)})`, backdropFilter: 'blur(2px)' }}>
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
      <div className='w-11/12 grid grid-cols-5'>
        <div className='col-span-4'>
          {!loading ? <div className='flex col-span-4 md:w-11/12 md:mx-auto scrollbar-thin scrollbar-thumb-temp scrollbar-track-temp-1 overflow-x-auto'>
            <div className='flex mb-7 '>
              {elenco.cast.map((item, index) => (
                <div key={index} className="md:w-44 md:h-72 md:mr-3 border border-temp rounded-md" >
                  <div>
                    <img src={item.profile_path === null ? fotoIndis : `${getImage(item.profile_path)}`} alt={item.original_name} className='md:w-full h-48 object-cover rounded-t' />
                  </div>
                  <div className='md:p-2'>
                    <p className='text-white md:text-base'>{item.original_name}</p>
                    <p className='text-white md:font-light md:text-xs'>{item.character}</p>
                  </div>
                </div>
              ))}
            </div>
        </div> : <Loading />}

         <div className='md:w-11/12 mt-8 mx-auto'>
          <div className='flex items-center text-white'>
            <h2 className='text-3xl mr-6'>Social</h2>
            <ul className='flex text-1xl'>
              <li className='mr-4 border-b-4'>Resenhas <span className='text-temp-1'>{/* {resenhas.results !== undefined ? resenhas.results.length : '0'} */}0</span></li>
              <li>Discussões</li>
            </ul>
          </div>
          <div className='mt-4 border border-temp-1 rounded-md'>
            {!loading && resenhas.results.length > 0 ? <Movies results={resenhas} status={loading} /> : <h3 className='p-3'>Ainda não temos uma resenha para <span className='font-medium italic'>{details.title}</span></h3>}
          </div>
        </div>
        
        {!loading && <div className='w-11/12 flex mx-auto overflow-y-auto mt-3 scrollbar-thin scrollbar-thumb-temp scrollbar-track-temp-1'>
          <div className='text-white'>
            <h3 className='my-3 text-2xl'>Recomendações</h3>
            <div className='flex '>
            {recomendations.results.map((item, index) => (
              <div key={index} className='w-60 mr-4 rounded-md'>
                <div>
                  <img src={getImage(item.backdrop_path)} alt="" className='w-60 md:h-36 object-cover rounded-md' />
                </div>
                <div className='text-sm  mt-1 flex justify-between'>
                  <h4>{item.title}</h4>
                  <span>{item.vote_average.toFixed(1) * 10}%</span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>}

        </div>

        {!loading && <div className='w-64 col-span-1 -ml-1'>
           <MovieDetailsLateral info={details} tags={palavrasChaves} result={details} />
        </div>}
        
      </div>

      {!loading && <Footer />}
    </>
  )
}

export default Movie