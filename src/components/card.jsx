import React, { useState, useEffect } from 'react'
import apiTopRated from '../api';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const card = () => {
    const [topRated, setTopRated] = useState([])
    const [loading, setLoading] = useState(false)
    const imagensMovides = `https://image.tmdb.org/t/p/w500`;

    const roundProgressStyles = {
        pathColor: `#6C63FF`,
        textColor: '#a1a1a1',
        backgroundColor: '#3e98c7',
        pathTransitionDuration: 0.5,
    }

    useEffect(() => {
        const handle = async () => {
            const top = await apiTopRated()
            setTopRated(top)
            setLoading(true)
        }
        handle()
    }, [])

    const tratarDate = (date) => {
        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        let data = new Date(date)
        let dataFormatada = ((data.getDate()) + " de " + meses[(data.getMonth())] + " de " + data.getFullYear())
        return dataFormatada
    }

    return (
        <div className='d-flex mt-4 container-card'>
            {console.log(topRated)}
            {loading ?
                <div className='d-flex'>
                    {topRated.results.map((item) => (
                        <div className='card-meu'>
                            <div className='container-context'>
                                <img className='imagem-card' src={`${imagensMovides}${item.backdrop_path}`} alt={item.title} />
                                <div className='barra'>
                                    <CircularProgressbar
                                        value={item.vote_average}
                                        text={`${item.vote_average}`}
                                        maxValue= '10'
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
                                <p>{tratarDate(item.release_date)}</p>
                            </div>
                        </div>
                    ))}
                </div> : <h2>Carregando...</h2>}
        </div>
    )
}

export default card