import React, { useState} from 'react';
import './App.css'
import Home from './components/home/Home'
import Nav from './components/nav/Nav';
import cartContext from './context/context';

function App() {

  const [topRated, setTopRated] = useState([])
  const [popular, setPopular] = useState([])

  return (
    <div>
      <cartContext.Provider value={{topRated, setTopRated, popular, setPopular}}>
        <Nav />
        <Home />
      </cartContext.Provider>
    </div>
  )

}

export default App
