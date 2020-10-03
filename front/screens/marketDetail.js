import React from 'react'
import { Text, View, Image} from 'react-native'
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
`
const OFont = styled(Text)`
    font-size: 18px;
    color: #EE8F01;
`
const Imga = styled(View)`
    display:flex;
    flex:1;
    height:50;
    width:50;
`

const MarketDetail = ({navigation, route}) => {
    navigation.setOptions({title:route.params.name})
    return (
        <Container>
            <Up>
                <Font>{route.params.name}</Font>
                <OFont>{route.params.type}</OFont>
            </Up>
            <Image style={Imga} sourse={{uri:'https://dev-gang.ru/static/storage/24808028622541768947383165896446886988.png'}}/>
        </Container>
    )
}
export default MarketDetail
