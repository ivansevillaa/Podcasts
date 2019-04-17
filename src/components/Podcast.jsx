import React from 'react'

import './styles/podcast.css'

function Podcast(props) {
    const { title, duration, imagePodcast, imageChannel } = props
    return(
        <div className="Podcast">
            <img 
                src={ imagePodcast || imageChannel } 
                alt="podcast-logo"
                width={ 75 }
                height={ 75 }
            />
            <div className="Podcast-details">
                <h4>{ title }</h4>
                <p>{ parseInt(duration / 60) } minutes</p>
            </div>
        </div>
    )
}

export default Podcast