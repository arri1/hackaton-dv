import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Markets from '../screens/markets'
import Card from '../navigators/card'
import MarketDetail from "../screens/marketDetail"

const Stack = createStackNavigator()
const MarketNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Market'} options={{ title: 'Магазины' }} component={Markets} />
            <Stack.Screen
                name={'MarketDetail'}
                options={() => ({ title: 'Магазин' })}
                component={MarketDetail}
            />
        </Stack.Navigator>
    )
}
export default MarketNavigator
