import React from 'react'

import './styles/modal.css'

function Modal(props) {
    return(
        <div className="Modal">
            { props.children }
        </div>
    )
}

export default Modal    