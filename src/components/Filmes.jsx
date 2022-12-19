import React, { useEffect, useState } from 'react'
import Card from './home/Card'
import { apiPopular } from '../api'

const Filmes = () => {
  const [popular, setPopular] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handle = async () => {
      const popularFilme = await apiPopular()
      setPopular(popularFilme)
      setLoading(false)
    }
    return handle
  }, [])


  return (
    <div className='container-fluid'>
      <div>
        {!loading ? <Card array={popular} /> : <h2>Carregando...</h2>}
      </div>
      {console.log(loading)}
    </div>
  )
}

export default Filmes