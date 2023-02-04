import React from 'react'
import { Link } from 'react-router-dom'
import { tratarDate } from '../../utils/date'
import Loading from '../../components/loading/Loading';
import Grafico from './Grafico';


const Card = (props) => {
    const imagensMovides = `https://image.tmdb.org/t/p/w500`;

    return (
        <div className='flex scrollbar-thin scrollbar-thumb-temp scrollbar-track-temp-1 overflow-x-auto'>
            <div className='flex mb-8'>
                {props.array.results.map((item, index) => (
                    <div className='w-52 h-80 bg-temp mr-4 rounded relative' key={index}>
                        {props.array.results.length > 0 ?
                            <Link to={`movie/${item.id}`} style={{ textDecoration: 'none' }}>
                                <div className="box-border">
                                    <img className='w-52 h-52 object-cover' src={`${imagensMovides}${item.backdrop_path}`} alt={item.title} />
                                    <div className='w-8 absolute bottom-3 right-3'>
                                        <Grafico item={item.vote_average} />
                                    </div>
                                </div>
                                <div className='mt-2 p-2'>
                                    <h3 className='text-sm text-white'>{item.title}</h3>
                                    <p className= 'text-xs mt-1 text-slate-500'>{tratarDate(item.release_date)}</p>
                                </div>
                            </Link> : <Loading />
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card