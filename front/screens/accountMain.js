import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'

const Container = styled(View)``

const AccountMain = ({ navigation }) => {
    return (
        <Container>
            <ScrollView>
                <Text>Hello</Text>
            </ScrollView>
        </Container>
    )
}
export default AccountMain
