import React from 'react'

import './styles/channel-list.css'

import Channel from '../components/Channel.jsx'

function ChannelList(props) {
    const { channels } = props
    return(
        <div className="channels">
            { channels.map((item) => {
                return(
                    <Channel
                        key={ item.id }
                        image={ item.urls.logo_image.original }
                        title={ item.title }
                    />
                )
            })}
        </div>
    )
}

export default ChannelList