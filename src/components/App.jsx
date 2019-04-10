import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import '../global.css'

import Layout from './Layout.jsx'
import Home from '../pages/Home.jsx'

function App(props) {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App