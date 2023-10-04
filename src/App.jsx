import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import MovieList from './components/MovieList/MovieList.jsx'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList />
    </div>
  )
}

export default App