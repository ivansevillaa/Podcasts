import React from 'react'

import './styles/channel.css'

function Channel(props) {
    const { banner, channelTitle } = props
    return(
        <div className="ChannelPage">
            <figure className="ChannelPage-banner">
                    <img src={ banner } alt="baner-channel"/>
            </figure>
            <h2>{ channelTitle }</h2>
            { props.children }
        </div>
    )
}

export default Channel