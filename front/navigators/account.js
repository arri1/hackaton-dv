import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountMain from '../screens/accountMain'

const Stack = createStackNavigator()
const MarketNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'accountMain'} options={{title:"Профиль"}} component={AccountMain} />
        </Stack.Navigator>
    )
}
export default MarketNavigator
