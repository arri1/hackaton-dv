import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'

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

const AccountMain = () => {
    return (
        <Container>
            <ScrollView>
                <Container>
                    <Up>
                        <Avatar></Avatar>
                        <AvatarText>MyName</AvatarText>
                    </Up>
                </Container>
            </ScrollView>
        </Container>
    )
}
export default AccountMain
