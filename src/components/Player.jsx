import React from 'react'

import './styles/player.css'

function Player(props) {
    return(
        <div className="Player">
            { props.children }
        </div>
    )
}

export default Player