import React from 'react'
import styled from 'styled-components'
import {Button, View} from 'react-native'
import {Title} from "../components/textStyle"

const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`
const Registration = ({navigation}) => {
    return (
        <Container>
            <Title>Регистрация</Title>
            <Button
                style={{marginTop:24}}
                onPress={()=>{navigation.goBack()}}
                title={'Назад'}
            />
        </Container>
    )
}
export default Registration
