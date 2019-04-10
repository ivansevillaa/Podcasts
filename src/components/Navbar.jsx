import React from 'react'
import { Link } from 'react-router-dom'

import './styles/navbar.css'

function Navbar(props) {
    return(
        <div className="Navbar">
            <Link className="Navbar-link" to="/">
                <p>Home</p>
            </Link>
            <Link className="Navbar-link" to="/podcasts">
                <p>Podcasts</p>
            </Link>
        </div>
    )
}

export default Navbar