import React from 'react';
import './App.css'
import Home from './components/home/Home'
import Nav from './components/nav/Nav';
import Movie from './components/movie/Movie'
import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  )

}

export default App
