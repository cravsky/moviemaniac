import React from 'react'

import './Navbar.css'
import DarkMode from '../DarkMode/DarkMode'
import fire from '../../assets/fire.png'
import star from '../../assets/glowing-star.png'
import party from '../../assets/partying-face.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Movie Maniac</h1>
            <div className="navbar_links">
                <DarkMode />
                <a href="#popular">Popular
                    <img src={fire} className="navbar_emoji" alt="fire emoji">
                    </img>
                </a>
                <a href="#top_rated">Top Rated
                    <img src={star} className="navbar_emoji" alt="star emoji">
                    </img>
                </a>
                <a href="#upcoming">Upcoming
                    <img src={party} className="navbar_emoji" alt="party emoji">
                    </img>
                </a>

            </div>
        </nav>
    )
}

export default Navbar