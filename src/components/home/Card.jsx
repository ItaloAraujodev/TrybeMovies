import React from 'react'
import { Link } from 'react-router-dom'
import { tratarDate } from '../../utils/date'
import Grafico from './Grafico';


const Card = (props) => {
    const imagensMovides = `https://image.tmdb.org/t/p/w500`;

    return (
        <div className='d-flex mt-4 container-card'>
            <div className='d-flex'>
                {props.array.results.map((item, index) => (
                    <div className='card-meu' key={index}>
                        <Link to={`movie/${item.id}`} style={{ textDecoration: 'none' }}>
                            <div className='container-context'>
                                <img className='imagem-card' src={`${imagensMovides}${item.backdrop_path}`} alt={item.title} />
                                <div className='barra'>
                                    <Grafico item={item.vote_average} />
                                </div>
                            </div>
                            <div className='itens-cards'>
                                <h3 className='title-card'>{item.title}</h3>
                                <p>{tratarDate(item.release_date)}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card