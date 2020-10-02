import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View } from 'react-native'

const Container = styled(View)`
  flex:1;
  align-items: center;
  justify-content: center;
`

const Markets = ({ navigation }) => {
    return (
        <Container>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('MarketDetail')
            }}>
                <Text>Markets1</Text>
            </TouchableOpacity>
        </Container>
    )
}
export default Markets
