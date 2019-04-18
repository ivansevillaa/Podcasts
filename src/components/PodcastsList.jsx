import React from 'react'

import Podcast from './Podcast.jsx'

import './styles/podcast-list.css'

function PodcastsList(props) {
    const { podcasts } = props 
    return(
        <div className="PodcastsList">
            <h3>Last Podcasts</h3>
            { podcasts.map((item) => {
                return(
                    <Podcast 
                        key={ item.id }
                        title={ item.title }
                        duration={ item.duration }
                        imagePodcast={ item.urls.image }
                        imageChannel={ item.channel.urls.logo_image.original }
                        handleClick={ props.handleClick }
                    />
                )
            })}
        </div>
    )
}

export default PodcastsList