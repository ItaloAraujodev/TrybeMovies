import React from 'react';
import './App.css'
import Home from './components/home/Home'
import Nav from './components/nav/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {



  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  )

}

export default App
