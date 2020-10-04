import React from 'react'
import MarketNavigator from '../navigators/marketNavigator'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/AntDesign'
import AccountMain from "../screens/accountMain"

const Tab = createBottomTabNavigator()

const MainNavigator = ({navigation}) => {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="MarketsNavigation"
                component={MarketNavigator}
                options={{
                    title: 'Главная',
                    tabBarIcon: ({focused}) => {
                        return <Icon name="home" size={30} color={focused ? '#2196F3' : 'gray'}/>
                    }
                }}
            />
            <Tab.Screen
                name="Search"
                options={{
                    title: 'Поиск',
                    tabBarIcon: ({focused}) => {
                        return <Icon name="find" size={30} color={focused ? '#2196F3' : 'gray'}/>
                    }
                }}
                component={AccountMain}
            />
            <Tab.Screen
                name="orders"
                options={{
                    title: 'Мои заказы',
                    tabBarIcon: ({focused}) => {
                        return <Icon name="profile" size={30} color={focused ? '#2196F3' : 'gray'}/>
                    }
                }}
                component={AccountMain}
            />
            <Tab.Screen
                name="Account"
                options={{
                    title: 'Профиль',
                    tabBarIcon: ({focused}) => {
                        return <Icon name="user" size={30} color={focused ? '#2196F3' : 'gray'}/>
                    }
                }}
                component={AccountMain}
            />
        </Tab.Navigator>
    )
}
export default MainNavigator
