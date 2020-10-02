import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View } from 'react-native'
import Card from './../components/card'
const Container = styled(View)`
  align-items: center;
  flex-direction:row;
  flex:1;
  justify-content: center;
`

const MainCard = styled(View)`
    flex:1;
`

const data = [
    {
        id: '',
        login: '',
        password: '',
        name: 'pyat',
        type: 'producti',
        description: 'opisanie',
        address: '',
        location: '',
        product: '',
        orders: ''
    }
]
const Markets = ({ navigation }) => {
    return (
        <Container>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('MarketDetail')
                }}
            >
                <Text>Markets12</Text>
                <MainCard>
                    {data.map((item) => {
                    return (
                        <Card title={item.name} description={item.description}/>
                    )
                    }
                    )}
                </MainCard>
            </TouchableOpacity>
        </Container>
    )
}
export default Markets
