import React from 'react'
import {ScrollView, TouchableOpacity,Text} from 'react-native'
import styled from 'styled-components'

const Container = styled(ScrollView)`
    flex-direction: column;
    margin: 15px;
    flex: 1;
`

const MarketDetail = ({navigation, route}) => {
    navigation.setOptions({title: route.params.name})
    const products = route.params.products
    return (
        <Container>
            {
                products.map(item => {
                    return (
                        <TouchableOpacity
                            style={
                                {
                                    borderRadius: 20,
                                    padding: 5,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    flexDirection: 'column'
                                }
                            }
                        >
                            <Text>{item.name}</Text>
                            <Text>{item.description}</Text>
                            <Text>{item.cost}</Text>


                        </TouchableOpacity>
                    )
                })
            }
        </Container>
    )
}
export default MarketDetail
