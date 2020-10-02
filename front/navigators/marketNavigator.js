import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Markets from '../screens/markets'
import MarketDetail from '../screens/marketDetail'

const Stack = createStackNavigator()
const MarketNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Market'} component={Markets} />
            <Stack.Screen name={'MarketDetail'} component={MarketDetail} />
        </Stack.Navigator>
    )
}
export default MarketNavigator
