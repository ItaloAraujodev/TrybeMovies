import React from 'react'
import date from '../../utils/date'
import Grafico from './Grafico';


const card = (props) => {
    const imagensMovides = `https://image.tmdb.org/t/p/w500`;

    return (
        <div className='d-flex mt-4 container-card'>
            <div className='d-flex'>
                {props.array.results.map((item, index) => (
                    <div className='card-meu' key={index}>
                        <div className='container-context'>
                            <img className='imagem-card' src={`${imagensMovides}${item.backdrop_path}`} alt={item.title} />
                            <div className='barra'>
                                <Grafico item={item.vote_average} />
                            </div>
                        </div>
                        <div className='itens-cards'>
                            <h3 className='title-card'>{item.title}</h3>
                            <p>{date(item.release_date)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default card