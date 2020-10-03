import React, {useState} from 'react'
import styled from 'styled-components'
import {TextInput, View} from "react-native"
import {Title} from "../components/textStyle"

const Contianer = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
`
const StyledTextInput = styled(TextInput)`
  height: 40px;
  border-color: red;
  border-radius: 24px;
  border-width: 0.5px; 
  width: 90%;
  padding: 0 5%;
  margin-top: 24px;
`
const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <Contianer>
            <Title>Логин</Title>
            <StyledTextInput
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <StyledTextInput
                onChangeText={text => setPassword(text)}
                value={password}
            />
        </Contianer>
    )
}
export default Login
