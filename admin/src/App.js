import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import apollo from './utils/apollo'
import Home from './pages/home'
import Sider from './components/sider';
import { NormalPadding } from './components/padding'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

const App = () => {
    return (
        <div>
            <ApolloProvider client={apollo}>
                <Router>
                    <Container>
                        <Sider/>
                        <Switch>
                            <NormalPadding>
                                <Route exact path={'/'} component={Home} />
                            </NormalPadding>
                        </Switch>
                    </Container>
                </Router>
            </ApolloProvider>
        </div>
    )
}

export default App
