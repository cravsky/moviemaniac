import React from 'react'

import Navbar from './components/Navbar/Navbar.jsx'
import './App.css'
import MovieList from './components/MovieList/MovieList.jsx'
import fire from './assets/fire.png'
import star from './assets/glowing-star.png'
import party from './assets/partying-face.png'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList movieType="popular" title="Popular" emoji={fire} />
      <MovieList movieType="top_rated" title="Top Rated" emoji={star} />
      <MovieList movieType="upcoming" title="Upcoming" emoji={party} />
    </div>
  )
}

export default App