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
import Products from "./pages/products"

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

const App = () => {
    const [logged, setLogged] = useState(async () => {
        const result = await apollo.query({ query: BUSINESS, fetchPolicy: 'catch-only', errorPolicy: 'ignore' })
        return (result && result.data && result.business)

    })
    useEffect(() => {
        apollo.watchQuery({
            query: BUSINESS,
            fetchPolicy: 'cache-and-network'
        }).subscribe({
            next: (res) => {
                const { data } = res
                if (data && data.business) {
                    setLogged(true)
                    return null
                }
                setLogged(false)

            }
        })
    }, [])
    return (
        <ApolloProvider client={apollo}>
            <Router>
                <Container>
                    <Route exact path={'/'}
                           component={
                               (props) => {
                                   return (
                                       <NormalPadding>
                                           <Login {...props} />
                                       </NormalPadding>
                                   )
                               }} />
                    <Route exact path='/authorized/:path?/'>
                        {!logged ? () => {
                                return (
                                    <Redirect to={'/'} />
                                )
                            }
                            : null}
                        <Sider />
                        <Switch>
                            <NormalPadding>
                                <Route exact path={'/authorized/home'} component={Home} />
                                <Route exact path={'/authorized/addProducts'} component={AddProudct} />
                                <Route exact path={'/authorized/products'} component={Products} />
                            </NormalPadding>
                        </Switch>
                    </Route>


                </Container>
            </Router>
        </ApolloProvider>
    )
}

export default App
