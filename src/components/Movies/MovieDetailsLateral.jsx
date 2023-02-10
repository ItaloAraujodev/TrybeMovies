import React from 'react'

const MovieDetailsLateral = (props) => {

    const { info, tags, resenhas } = props

    return (
        <div className='text-white'>
            <div className='mb-5'>
                <h4 className='font-bold'>Título original</h4>
                <p className='font-light'>{info.original_title}</p>
            </div>

            <div className='mb-5'>
                <h4 className='font-bold'>Sítuação</h4>
                <p className='font-light'>{info.status}</p>
            </div>

            <div className='mb-5'>
                <h4 className='font-bold'>Idioma original</h4>
                <p className='font-light'>{info.spoken_languages[0].english_name}</p>
            </div>

            <div className='mb-5'>
                <h4 className='font-bold'>Orçamento</h4>
                <p className='font-light'>{info.budget.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>

            <div className='mb-5'>
                <h4 className='font-bold'>Receita</h4>
                <p className='font-light'>{info.revenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
            </div>

            <div>
                <h4 className='font-bold'>Palavras-chave</h4>
                <div className='flex flex-wrap mt-4'>
                    {tags.keywords.map((tag, index) => (
                        <div key={index} className="m-1 ">
                            <p className='text-xs border border-temp-1 p-2 rounded-md'>{tag.name}</p>
                        </div>
                    ))}
                </div>
                <div className='border border-temp-1 mt-4'></div>
            </div>
      
        </div>
    )
}

export default MovieDetailsLateral