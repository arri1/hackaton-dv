import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import Card from '../components/card'
import MarketDetail from '../screens/marketDetail'

const Stack = createStackNavigator()
const CardNavigator = (props) => {
    const { name, description, type } = props
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'products'}
                options={{ title: 'Продукты' }}
                component={() => {
                    return <MarketDetail name={name} description={description} type={type} />
                }}
            />
        </Stack.Navigator>
    )
}
export default CardNavigator
