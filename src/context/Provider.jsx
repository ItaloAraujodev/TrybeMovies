import React, { useState } from 'react'
import Context from './Context'

function Provider({ children }) {

    const [topRated, setTopRated] = useState([])
    const [popular, setPopular] = useState([])

    const value = {
        topRated, 
        setTopRated,
        popular, 
        setPopular,
    }

    return (
        <Context.Provider value={ value }>
            {children}
        </Context.Provider>
    )
}

export default Provider;