import React from 'react'

import './styles/podcast-image.css'

function PodcastImage(props) {
    return(
        <picture className="PodcastImage">
            <img 
                src={ props.imagePodcast || props.imageChannel }
                width={ 250 }
                height={ 250 }
            />
        </picture>
    )
}

export default PodcastImage