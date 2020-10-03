import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View } from 'react-native'
const Old = styled(View)`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left:15px;
    margin-right:15px;
`
const Row = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
const Padding = styled(View)`
    padding: 10px;
`
const Card = (props) => {
    const { name, description, type } = props
    return (
        <Old>
            <Padding>
                <Row>
                    <Text>{name}</Text>
                    <Text style={{color: "orange"}}>{type}</Text>
                </Row>
                <Text>{description}</Text>
            </Padding>
        </Old>
    )
}
export default Card
