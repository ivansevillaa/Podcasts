import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import '../global.css'

import Layout from './Layout.jsx'
import HomeContainer from '../pages/HomeContainer.jsx'
import ChannelContainer from '../pages/ChannelContainer.jsx'

function App(props) {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ HomeContainer } />
                    <Route exact path="/channel/:channelId" component={ ChannelContainer } />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App