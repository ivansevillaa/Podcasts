import React from 'react'
import { Link } from 'react-router-dom'

import './styles/navbar.css'
import logo from '../images/podcast-logo.png'

function Navbar(props) {
    return(
        <div className="Navbar">
            <Link className="Navbar-link" to="/">
                <img className="Navbar-logo" src={ logo } alt="logo-podcast"/>
                <p>Podcasts</p>
            </Link>
        </div>
    )
}

export default Navbar