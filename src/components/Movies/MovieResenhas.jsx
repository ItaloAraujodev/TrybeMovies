import React from 'react'
import { getImage } from '../../utils/api'
import { tratarDate } from '../../utils/date'
import { TiStar } from 'react-icons/ti';
import './styleText.css'

const Movies = (props) => {
    const { results, loading } = props

    const tratarTextoContent = () => {
        const text = results.results[0].content;

        if (!results.results > 0) {
            throw new Error('Nenhum resultado encontrado')
        }

        if (!loading) {
            const removendoAsterisco = text.replace(/['*_\r']/g, '')
            const separando = removendoAsterisco.split('\n')
            const retirarOsElementoVaziosDoArray = separando.filter(item => item.trim() !== '')
            return retirarOsElementoVaziosDoArray
        }
    }

    return (
        <div className='w-full mt-2 flex p-7 rounded-sm '>
            <div className='w-16 h-16'>
                <img src={getImage(results.results[0].author_details.avatar_path)} alt="" className=' w-16 h-16 rounded-full' />
            </div>

            <div className='w-full ml-4 text-white'>
                <div>
                    <div className='flex items-center'>
                        <h2 className='text-xl font-bold'>Uma resenha por <span>{results.results[0].author}</span></h2>
                        <div className='flex justify-center items-center ml-4 w-16 h-6 text-center text-sm border-2 border-temp-1 rounded-md'>
                            <span className='mx-1'><TiStar /></span>
                            <span className=''>{results.results[0].author_details.rating}</span>
                        </div>
                    </div>
                    <p className='text-xs font-light' >Escrita por <span className='font-medium'>{results.results[0].author} </span>{tratarDate(results.results[0].updated_at)}</p>

                    <div className='text-white mt-4'>
                        <h4 className='mb-3 font-bold'>{tratarTextoContent()[0]}</h4>
                        {/* ERRORR */}{tratarTextoContent()[1].length < 200 ? <p className='mb-3 text-white text-sm font-bold italic'>{tratarTextoContent()[1]}</p> : <p className='mb-3 font-ligh text-white texto text-sm'>{tratarTextoContent()[1]}</p>}
                        {tratarTextoContent()[1].length > 200 ? '' : <p className='texto text-sm' >{tratarTextoContent()[2]}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies