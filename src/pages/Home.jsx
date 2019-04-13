import React from 'react'

import './styles/home.css'

function Home(props) {
    return(
        <div className="Home">
            {props.children}
        </div>
    )
}

export default Home