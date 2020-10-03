import React from 'react'
import MarketNavigator from '../navigators/marketNavigator'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="MarketsNavigator" component={MarketNavigator}/>
        </Tab.Navigator>
    )
}
export default MainNavigator
