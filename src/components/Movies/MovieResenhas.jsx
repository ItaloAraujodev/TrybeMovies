import React from 'react'
import { getImage } from '../../utils/api'
import { tratarDate } from '../../utils/date'
import './style.css'

const Movies = (props) => {
    const { results } = props
    const text = results.results[0].content;
  return (
    <div className='mt-8 grid grid-cols-4 justify-start p-5 rounded-sm'>
        <div className='w-16 h-16 mr-6 col-span-1'>
            <img src={getImage(results.results[0].author_details.avatar_path)} alt="" className=' w-16 h-16 rounded-full' />
        </div>

        <div className='col-span-3 -ml-24  '>
            <div>
                <div className='flex items-center'>
                    <h2 className='text-xl font-bold'>Uma resenha por <span>{results.results[0].author}</span></h2>
                    <span className='ml-4 w-16 h-6 text-center text-sm border-2 rounded-md'>{results.results[0].author_details.rating}</span>
                </div>
                <p className='text-xs font-light' >Escrita por <span className='font-medium'>{results.results[0].author} </span>{tratarDate(results.results[0].updated_at)}</p>
            </div>

           <div className='mt-4'>
                <h4 className='mb-3 font-bold'>{text.split('_')[0].split('*')}</h4>
                <p className='mb-3 italic text-white font-bold'>{text.split('_')[1].split('*')}</p>
                <p className='texto text-sm' >{text.split('_')[2].split('*')}</p>
            </div>
        </div> 
    </div>
  )
}

export default Movies