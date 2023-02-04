import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiDetails, apiElenco } from '../../api';
import Loading from '../../components/loading/Loading';
import { formatDateDia, converter } from '../../utils/date'
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

 /*  const array = elenco.cast > 0 && elenco.cast.slice(0, 15) */
  console.log(elenco)

  return (
    <>
      <Nav />
      <div className='w-full'>
          {!loading ? <div className='w-11/12 flex mx-auto mt-6 text-white '>
            <div className='w-2/6'>
              <img src={`${imagensMovides}${details.poster_path}`} alt={details.title} className='w-full rounded' />
            </div>

            <div className='w-8/12 flex flex-col justify-center ml-3 p-3'>
              <h2 className='text-3xl mt-2'>{details.title} <span>({details.release_date.split('-')[0]})</span></h2>
              <p className='text-base text-slate-400 mb-3'>{formatDateDia(details.release_date)} <span className='ms-2'>- </span><span className='ms-2'>{jointDetails()}</span><span className='ms-2'> •</span> <span className='ms-2'>{converter(details.runtime)}</span></p>
              <p className='italic text-temp-1 mb-3'>{details.tagline}</p>
              <div>
                <h3 className='text-xl mb-3'>Sinopse</h3>
                <p>{details.overview}</p>
              </div>
            </div>
          </div> : <Loading />}
        </div>
        <h2 className='w-11/12 text-white text-2xl mx-auto my-6'>Elenco principal</h2>
        {!loading ? <div className='flex w-11/12  mx-auto scrollbar-thin scrollbar-thumb-temp scrollbar-track-temp-1 overflow-x-auto'>
          <div className='flex mb-8 '>
             {elenco.cast.map((item, index) => (
              <div key={index} className="w-40 h-72 mr-3 bg-temp rounded" >
                <div>
                  <img src={`${imagensMovides}${item.profile_path}`} alt="" className='w-full h-48 object-cover rounded-t'/>
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