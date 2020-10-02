import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View } from 'react-native'
const Old = styled(View)`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    max-height: 100px;
`

const Card = (props) => {
    const { name, description } = props
    return (
        <Old>
            <Text>{name}</Text>
            <Text>{description}</Text>
        </Old>
    )
}
export default Card
