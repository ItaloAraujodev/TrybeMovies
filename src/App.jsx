import React from 'react';
import './App.css'
import Home from './components/home/Home'
import Nav from './components/nav/Nav';
import Movie from './components/movie/Movie'
import Search from './components/Search/Search';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='geral'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  )

}

export default App
