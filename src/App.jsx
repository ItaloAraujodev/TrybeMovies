import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home'
import Movie from './components/movie/Movie'
import Search from './components/Search/Search';
import NotFound from './components/NotFound';
import './App.css'

function App() {
  return (
    <div className='geral'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </div>
  )

}

export default App
