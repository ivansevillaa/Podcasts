import React, { Component } from 'react'

import Player from './Player.jsx'
import BackButton from './BackButton.jsx'
import PodcastImage from './PodcastImage.jsx'
import PodcastPlayer from '../components/PodcastPlayer.jsx'

class PlayerContainer extends Component {
    render() {
        return(
            <Player>
                <BackButton handleClick={ this.props.handleClick }/>
                <PodcastImage 
                    imagePodcast={ this.props.podcast.imagePodcast }
                    imageChannel={ this.props.podcast.imageChannel }
                />
                <PodcastPlayer 
                    title={ this.props.podcast.title }
                    channelTitle={ this.props.podcast.channelTitle }
                    audio={ this.props.podcast.audio }
                />
            </Player>
        )
    }
}

export default PlayerContainer