import React, { useState } from 'react'
import Context from './Context'

function Provider({ children }) {

    const [topRated, setTopRated] = useState([])
    const [popular, setPopular] = useState([])
    const [searchResult, setSearchResult] = useState([]);
    const [paginacao , setPaginacao] = useState(3)

    const value = {
        topRated, 
        setTopRated,
        popular, 
        setPopular,
        searchResult,
        setSearchResult,
        paginacao,
        setPaginacao
    }

    return (
        <Context.Provider value={ value }>
            {children}
        </Context.Provider>
    )
}

export default Provider;