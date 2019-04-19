import React from 'react'

import './styles/back-button.css'

function BackButton(props) {
    return(
        <button 
            className="BackButton"
            onClick={ props.handleClick }
        >
            &lt; Go Back
        </button>
    )
}

export default BackButton