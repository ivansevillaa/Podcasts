import React from 'react'

import './styles/podcast-player.css'

function PodcastPlayer(props) {
    return(
        <div className="PodcastPlayer">
            <h3>{ props.title }</h3>
            <h6>{ props.channelTitle }</h6>
            <audio 
                controls 
                autoPlay={true}
            >
                <source src={ props.audio } type='audio/mpeg' />
            </audio>
        </div>               
    )
}

export default PodcastPlayer