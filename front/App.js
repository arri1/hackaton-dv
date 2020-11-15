import React from 'react'
import { Dimensions, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styled from 'styled-components'
import MarketNavigator from './navigators/marketNavigator'
import Switch from 'react-native-dark-mode-switch';
import { Appearance } from 'react-native';

const { width, height } = Dimensions.get('screen')

const Container = styled(SafeAreaView)`
  width: ${width};
  height: ${height};
`

const Tab = createBottomTabNavigator()

const App = () => {
    return (
        <Container>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="iOS14.Test" component={MarketNavigator} />
                </Tab.Navigator>
            </NavigationContainer>
        </Container>
 

    )
}
export default App;


