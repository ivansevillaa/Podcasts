import React, { Component } from 'react'

import Spinner from '../components/Spinner.jsx'
import Channel from './Channel.jsx'

class ChannelContainer extends Component {

    state = {
        loading: true,
        error: null,
        dataChannel: {
            body: {
                channel: {
                    urls: {
                        banner_image: {}
                    }
                }
            }
        },
        dataSeries: {
            body: {
                channels: []
            }
        },
        dataAudioClip: {
            body: {
                audio_clips: []
            }
        }
    }

    componentDidMount() {
        this.fetchChannel()
        this.fetchSeries()
        this.fetchAudioClip()
    }

    fetchChannel = async () => {
        this.setState({loading: true, error: null})
        try {
            const request = await fetch(`https://api.audioboom.com/channels/${this.props.match.params.channelId}`)
            const dataChannel =  await request.json()
            this.setState({loading: false, dataChannel: dataChannel})
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    fetchSeries = async () => {
        this.setState({loading: true, error: null})
        try {
            const request = await fetch('https://api.audioboom.com/channels/4702115/child_channels')
            const dataSeries =  await request.json()
            this.setState({loading: false, dataSeries: dataSeries})
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    fetchAudioClip = async () => {
        this.setState({loading: true, error: null})
        try {
            const request = await fetch('https://api.audioboom.com/channels/4702115/audio_clips')
            const dataAudioClip =  await request.json()
            this.setState({loading: false, dataAudioClip: dataAudioClip})
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    render() {
        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }

        if (this.state.loading) {
            return <Spinner />   
        }

        return(
            <Channel
                banner={ this.state.dataChannel.body.channel.urls.banner_image.original }
                channelTitle={ this.state.dataChannel.body.channel.title }
            > 
                
            </Channel>
        )
    }
}

export default ChannelContainer