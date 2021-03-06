import React, { Component } from 'react'

import Spinner from '../components/Spinner.jsx'
import Channel from './Channel.jsx'
import PodcastsList from '../components/PodcastsList.jsx'
import ModalContainer from '../components/ModalContainer.jsx'
import Modal from '../components/Modal.jsx'
import PlayerContainer from '../components/PlayerContainer.jsx'

class ChannelContainer extends Component {

    state = {
        modalVisibility: false,
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
            const request = await fetch(`https://api.audioboom.com/channels/${this.props.match.params.channelId}/child_channels`)
            const dataSeries =  await request.json()
            this.setState({loading: false, dataSeries: dataSeries})
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    fetchAudioClip = async () => {
        this.setState({loading: true, error: null})
        try {
            const request = await fetch(`https://api.audioboom.com/channels/${this.props.match.params.channelId}/audio_clips`)
            const dataAudioClip =  await request.json()
            this.setState({loading: false, dataAudioClip: dataAudioClip})
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    handleOpenModal = (podcast) => {
        this.setState({ 
            modalVisibility: !this.state.modalVisibility,
            podcast: podcast
        })
        console.log(podcast)
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
                {/* { this.state.dataSeries.body.channels.length > 0 && (
                    <SeriesList /> 
                )} */}
                <PodcastsList
                    handleOpenModal={ this.handleOpenModal } 
                    podcasts={ this.state.dataAudioClip.body.audio_clips } 
                />
                { this.state.modalVisibility && 
                    <ModalContainer>
                        <Modal>
                            <PlayerContainer 
                                handleClick={ this.handleOpenModal }
                                podcast={ this.state.podcast }
                            />
                        </Modal>
                    </ModalContainer> 
                }
            </Channel>
        )
    }
}

export default ChannelContainer