import React from 'react'
import {Dimensions, SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import styled from 'styled-components'
import MainNavigator from "./navigators/mainNavigator"
import Login from "./screens/login"

const Stack = createStackNavigator()

const {width, height} = Dimensions.get('screen')

const Container = styled(SafeAreaView)`
  width: ${width};
  height: ${height};
`

const App = () => {
    return (
        <Container>

            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'Login'} component={Login}/>
                    <Stack.Screen name={'Main'} component={MainNavigator}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Container>

    )
}
export default App


