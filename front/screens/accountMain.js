import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View, ScrollView, ButtonView } from 'react-native'
import { useApolloClient } from '@apollo/react-hooks'
import {AsyncStorage} from 'react-native'
import { USER } from '../gqls/user/queries'

const Container = styled(View)`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    margin-top: 15px;
    margin-bottom: 5px;
    margin-left: 12px;
    margin-right: 12px;
`

const Up = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    background-color: white;
    padding: 10px 10px 10px 10px;
    border-radius: 10px;
`

const Avatar = styled(View)`
    height: 60px;
    width: 60px;
    border-radius: 300px;
    background-color: gray;
`

const AvatarText = styled(Text)`
    padding-left: 15px;
`

const AccountMain = ({navigation}) => {
    const apollo = useApolloClient()
    let deleteToken = async () => { 
        await AsyncStorage.setItem('token', null)
        await apollo.writeQuery({ query: USER, data: { user: null } })
        navigation.navigate({routeName: 'Login'})
    }

    return (
        <Container>
            <ScrollView>
                <Container>
                    <Up>
                        <Avatar></Avatar>
                        <AvatarText>MyName</AvatarText>
                        <TouchableOpacity onPress={deleteToken}>
                            <Text>Go Something</Text>
                        </TouchableOpacity>
                    </Up>
                </Container>
            </ScrollView>
        </Container>
    )
}
export default AccountMain
