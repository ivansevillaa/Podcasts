import React, { Component } from 'react'

import Home from './Home.jsx'
import Spinner from '../components/Spinner.jsx'
import ChannelList from '../components/ChannelList.jsx'

class HomeContainer extends Component {

    state = {
        loading: true,
        error: null,
        data: {
            body: []
        }
    }

    componentDidMount() {
        this.fetchChannels()
    }

    fetchChannels = async () => {
        this.setState({loading: true, error: null})
        try {
            const request = await fetch('https://api.audioboom.com/channels/recommended')
            const data =  await request.json()
            this.setState({loading: false, data: data})
        } catch(error) {
            this.setState({loading: false, error: error})
        } 
    }

    render() {
        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }

        return(
            <Home>
                { this.state.loading && (
                    <Spinner />
                ) }
                <ChannelList channels={ this.state.data.body } />
            </Home>
        )
    }
}

export default HomeContainer