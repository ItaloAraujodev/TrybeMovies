import React from 'react'
import { Link } from 'react-router-dom'
import { tratarDate } from '../../utils/date'
import Grafico from './Grafico';
import { getImage } from '../../utils/api';


const Card = (props) => {

    return (
        <div className='md:flex scrollbar-thin scrollbar-thumb-temp scrollbar-track-temp-1 overflow-y-hidden'>
            <div className='md:flex md:mb-9 '>
                {props.array.results.map((item, index) => (
                    <div className='md:w-52 md:h-96 md: mr-4 transition duration-500 hover:scale-105 rounded-md ' key={index}>
                            <Link to={`movie/${item.id}`} style={{ textDecoration: 'none' }}>
                                <div>
                                    <img className='md:w-52 md:h-80 rounded-3xl object-cover' loading='lazy' src={`${getImage(item.backdrop_path, 'w500')}`} alt={item.title} />
                                </div>
                                <div className='md:flex justify-between items-center md:mt-2 md:p-2'>
                                    <div className='md:w-36'>
                                        <h3 className='text-sm text-white'>{item.title}</h3>
                                        <p className='text-xs mt-1 text-slate-500'>{tratarDate(item.release_date)}</p>
                                    </div>

                                    <div className='md:w-8'>
                                        <Grafico item={item.vote_average} />
                                    </div>
                                </div>
                            </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card