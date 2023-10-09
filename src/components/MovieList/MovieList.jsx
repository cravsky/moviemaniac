import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import './MovieList.css'
import fire from '../../assets/fire.png'
import MovieCard from './MovieCard/MovieCard'
import FilterGroup from './FilterGroup/FilterGroup'

const MovieList = () => {

    const [movies, setMovies] = useState([])
    const [minRating, setMinRating] = useState(0)
    const [filteredMovies, setFilteredMovies] = useState([])
    const [sort, setSort] = useState({
        by: "default",
        order: "asc"
    })

    useEffect(() => {
        fetchMovies()
    }, [])

    useEffect(() => {
        if (sort.by !== "default") {
            const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order])
            setFilteredMovies(sortedMovies);
        }
    }, [sort])

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=436697ac69a44f784040aed43fce1642&language=en-US&page=1')
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results);
        setFilteredMovies(data.results);
    }

    const handleFilter = rate => {
        if (rate === minRating) {
            setMinRating(0);
            setFilteredMovies(movies);
        } else {
            setMinRating(rate);
            const filtered = movies.filter(movie => movie.vote_average >= rate);
            setFilteredMovies(filtered);
        }
    }

    const handleSort = e => {
        const { name, value } = e.target;
        setSort(prev => {
            return { ...prev, [name]: value }
        })

    }

    return (
        <section className="movie_list">
            <header className="align_center movie_list_header">
                <h2 className="align_center movie_list_heading">Popular
                    <img src={fire} alt="fire" className='navbar_emoji'></img>
                </h2>
                {/* fs - filter/ sorting */}
                <div className="align_center movie_list_fs">
                    <FilterGroup onRatingClick={handleFilter}
                        minRating={minRating}
                        ratings={[8, 7, 6]} />
                    <select name="by" id="" onChange={handleSort}
                        value={sort.by} className="movie_sorting">
                        <option value="default">SortBy</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                    <select name="order" id="" onChange={handleSort}
                        value={sort.order} className="movie_sorting">
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </header>
            <div className="movie_cards">
                {movies ? filteredMovies.map(movie => <MovieCard movie={movie}
                    key={movie.id} />) : ''}
            </div>
        </section>
    )
}

export default MovieList