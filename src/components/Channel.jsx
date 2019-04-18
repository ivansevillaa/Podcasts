import React from 'react'
import { Link } from 'react-router-dom'

import './styles/channel.css'

function Channel(props) {
    const { image, title, id } = props
    return(
        <div className="Channel">
            <Link to={`/${id}`} >
                <img className="Channel-image" src={ image } alt="logo-channel"/>
            </Link>
            <h3 className="Channel-title">{ title }</h3>
        </div>
    )
}

export default Channel 