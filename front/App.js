import React from 'react'
import { Dimensions, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styled from 'styled-components'
import MarketNavigator from './navigators/marketNavigator'
import Account from './navigators/account'
import Icon from 'react-native-vector-icons/AntDesign'

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
                    <Tab.Screen
                        name="MarketsNavigation"
                        component={MarketNavigator}
                        options={{
                            title: 'Главная',
                            tabBarIcon: ({focused}) => {
                                return <Icon name="home" size={30} color={focused ? '#2196F3' :'gray' }  />
                            }
                        }}
                    />
                    <Tab.Screen
                        name="Search"
                        options={{
                            title: 'Поиск',
                            tabBarIcon: ({focused}) => {
                                return <Icon name="find" size={30} color={focused ? '#2196F3' :'gray' }  />
                            }
                        }}
                        component={Account}
                    />
                    <Tab.Screen
                        name="orders"
                        options={{
                            title: 'Мои заказы',
                            tabBarIcon: ({focused}) => {
                                return <Icon name="profile" size={30} color={focused ? '#2196F3' :'gray' } />
                            }
                        }}
                        component={Account}
                    />
                    <Tab.Screen
                        name="Account"
                        options={{
                            title: 'Профиль',
                            tabBarIcon: ({focused}) => {
                                return <Icon name="user" size={30} color={focused ? '#2196F3' :'gray' } />
                            }
                        }}
                        component={Account}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Container>
    )
}
export default App
