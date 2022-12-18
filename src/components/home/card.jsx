import React, { useState, useEffect, useContext } from 'react'
import date from '../../utils/date'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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
                                <CircularProgressbar
                                    value={item.vote_average}
                                    text={`${item.vote_average}`}
                                    maxValue='10'
                                    styles={{
                                        path: {
                                            // Path color
                                            stroke: '#0018f4'
                                        },
                                        text: {
                                            fill: '#ffffff',
                                            fontSize: '35px'
                                        },
                                    }}
                                />
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