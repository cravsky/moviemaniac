import React from 'react'
import './FilterGroup.css'

const FilterGroup = ({ onRatingClick, minRating, ratings }) => {
    return (
        <ul className="align_center movie_filter">
            {ratings.map((rate, index) =>
                <li key={index} className={minRating === rate ? "movie_filter_item active" : "movie_filter_item"} onClick={() => onRatingClick(rate)}>{rate}+ Star</li>
            )}
        </ul>
    )
}

export default FilterGroup