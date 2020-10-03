import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Markets from '../screens/markets'
import MarketDetail from '../screens/marketDetail'

const Stack = createStackNavigator()
const MarketNavigator = (props) => {
    const { name } = props
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Market'} options={{title:"Магазины"}} component={Markets} />
            <Stack.Screen name={'MarketDetail'} options={({ route }) => ({ title: "Магазин" })} component={MarketDetail} />
        </Stack.Navigator>
    )
}
export default MarketNavigator
