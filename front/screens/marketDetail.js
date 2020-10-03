import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Container = styled(View)`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
`
const Up = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`
const Font = styled(Text)`
    font-weight: bold;
    font-size: 18px;
    color: #2196f3;
`
const OFont = styled(Text)`
    font-size: 18px;
    color: #ee8f01;
`

const MarketDetail = ({ name , description, type }) => {
    return (
        <Container>
            <Up>
                <TouchableOpacity
                    onPress={() => {
                        navigation.pop()
                    }}
                >
                    <Font>{"<"} {name}</Font>
                </TouchableOpacity>

                <OFont>{type}</OFont>
            </Up>
        </Container>
    )
}
export default MarketDetail
