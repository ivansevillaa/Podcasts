import React, { Component } from 'react'

import './styles/podcast.css'

class Podcast extends Component {
    handleClick = () => {
        this.props.openModal(this.props)
    }

    render() {
        const { title, duration, imagePodcast, imageChannel } = this.props
        return(
            <div 
                className="Podcast"
                onClick={ this.handleClick }
            >
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
}

export default Podcast