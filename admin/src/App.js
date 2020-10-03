import 'antd/dist/antd.css'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import apollo from './utils/apollo'
import Sider from './components/sider'
import { NormalPadding } from './components/padding'
import Login from './pages/login'
import { BUSINESS } from './gql/business/query'
import Home from './pages/home'
import AddProudct from './pages/addProduct'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

const App = () => {
    const [business, setBusiness] = useState(null)
    useEffect(() => {
        apollo.watchQuery({
            query: BUSINESS,
            fetchPolicy: 'cache-and-network'
        }).subscribe({
            next: ({ data }) => {
                if (data && data.business) {
                    setBusiness(data.business)
                    return null
                }
                setBusiness(null)
            }
        })
    }, [])
    return (
        <ApolloProvider client={apollo}>
            <Router>
                <Container>
                    {!business ? <Route exact path={'/'}
                                        component={
                                            (props) => {
                                                return (
                                                    <NormalPadding>
                                                        <Login {...props} />
                                                    </NormalPadding>
                                                )
                                            }} /> : <Redirect from={'/'} to={'/authorized/home'} />}
                    <Route exact path='/authorized/:path?/'>
                        {!business ? <Redirect to={'/'} /> : null}
                        <Sider />
                        <Switch>
                            <NormalPadding>
                                <Route exact path={'/authorized/home'} component={Home} />
                                <Route exact path={'/authorized/addProduct'} component={AddProudct} />
                            </NormalPadding>
                        </Switch>
                    </Route>
                </Container>
            </Router>
        </ApolloProvider>
    )
}

export default App
