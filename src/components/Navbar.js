import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/dogs">Dogs App</Link>
            <Link to="/weather">Weather App</Link>
            <Link to="/cats">Cats App</Link>
            <Link to="/coin">Coin App</Link>
            <Link to="/news">News App</Link>
        </nav>
    </div>
  )
}

export default Navbar