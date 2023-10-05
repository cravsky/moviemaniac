import React, { useEffect, useState } from 'react'
import './MovieList.css'
import fire from '../../assets/fire.png'
import MovieCard from './MovieCard/MovieCard'

const MovieList = () => {


    useEffect(() => {
        fetchMovies()
    }, [])

    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=436697ac69a44f784040aed43fce1642&language=en-US&page=1')
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results)
    }

    return (
        <section className="movie_list">
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading">Popular
                    <img src={fire} alt="fire" className='navbar_emoji'></img>
                </h2>
                {/* fs - filter/ sorting */}
                <div className="align_center movie_list_fs">
                    <ul className="align_center movie_filter">
                        <li className="movie_filter_item active">8+ Star</li>
                        <li className="movie_filter_item">7+ Star</li>
                        <li className="movie_filter_item">6+ Star</li>
                    </ul>

                    <select name="" id="" className="movie_sorting">
                        <option value="">SortBy</option>
                        <option value="">Date</option>
                        <option value="">Rating</option>
                    </select>
                    <select name="" id="" className="movie_sorting">
                        <option value="">Ascending</option>
                        <option value="">Descending</option>
                    </select>
                </div>
            </header>
            <div className="movie_cards">
                {movies ? movies.map(movie => <MovieCard movie={movie} 
                key={movie.id} />) : ''}
            </div>
        </section>
    )
}

export default MovieList