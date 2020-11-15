import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View } from 'react-native'
const Old = styled(View)`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 1px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
`
const Row = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
`
const Padding = styled(View)`
    padding: 10px;
`

const End1 = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const Card = (props) => {
    const { name, description, type, cost, time } = props
    return (
        <Old>
            <Padding>
                <Row>
                    <Text>{name}</Text>
                    <Text style={{ color: 'black' }}>{type}</Text>
                </Row>
                <End1><Row><Text>{cost}</Text></Row></End1>
                <Row>
                    <Text>{description}</Text>
                    <End1>
                        <Text>{time}</Text>
                    </End1>
                </Row>
            </Padding>
        </Old>
    )
}
export default Card
