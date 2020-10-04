import React from 'react'
import {Dimensions, SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import styled from 'styled-components'
import MainNavigator from "./navigators/mainNavigator"
import Login from "./screens/login"
import {ApolloProvider} from '@apollo/react-hooks'
import apollo from './utils/apollo'
import Registration from "./screens/registration"

const Stack = createStackNavigator()

const {width, height} = Dimensions.get('screen')

const Container = styled(SafeAreaView)`
    width: ${width};
    height: ${height};
`

const App = () => {
    return (
        <Container>
            <ApolloProvider client={apollo}>
                <NavigationContainer>
                    <Stack.Navigator headerMode={'none'}>
                        <Stack.Screen name={'Login'} component={Login}/>
                        <Stack.Screen name={'Registration'} component={Registration}/>
                        <Stack.Screen name={'Main'}
                                      navigationOptions={{header: null}}
                                      component={MainNavigator}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </ApolloProvider>
        </Container>
    )
}
export default App
