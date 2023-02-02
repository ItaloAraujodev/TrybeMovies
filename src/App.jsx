import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home'
import Movie from './pages/movie/Movie'
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound';
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
