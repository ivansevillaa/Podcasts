import React, { Component } from 'react'
import { createPortal } from 'react-dom'

class ModalContainer extends Component {
    render() {
        return (
            createPortal(
                this.props.children,
                document.getElementById('player')
            )
        )
    }
}

export default ModalContainer