import React from 'react'
import './MovieCard.css'
import star from '../../../assets/star.png'

const MovieCard = () => {
    return (
        <a href="#" className="movie_card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLj73RRXW0DP2CZz1ol12_HPZjHmBesP5MSeMqGJ5YnmPe7FAV1X51Ix1vvpn2luLPaw&usqp=CAU"
                alt="movie poster" className='movie_poster' />
            <div className="movie_details">
                <h3 className="movie_details_heading">Movie Name</h3>
                <div className="align_center movie_date_rate">
                    <p>10-12-2020</p>
                    <p>8.0 <img src={star} alt="emoji_rating icon" className='card_emoji' /></p>
                </div>
                <p className="movie_description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, rem nam odit beatae deleniti debitis.</p>
            </div>
        </a>
    )
}

export default MovieCard