import React, {useState} from 'react'
import styled from 'styled-components'
import {Button, TextInput, View,AsyncStorage} from "react-native"
import {Title} from "../components/textStyle"
import {useApolloClient, useMutation} from '@apollo/react-hooks'
import {AUTH} from "../gqls/user/mutations"
import {USER} from "../gqls/user/queries"

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
const Login = ({navigation}) => {
    const apollo = useApolloClient()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const [onAuth] = useMutation(AUTH, {
        onCompleted:async ({authUser}) => {
            console.log(authUser)
            await AsyncStorage.setItem('token', authUser.token)
            apollo.writeQuery({query: USER, data: {user: authUser.user}})
            navigation.replace('Main')
        },
        onError: (error) => {
            console.log(error.message)
        }
    })

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
            <Button
                style={{marginTop: 60}}
                title={'Войти'}
                onPress={() => {
                    console.log('test')
                    onAuth({variables: {data: {email, password}}})
                }}/>
            <Button
                style={{marginTop: 24}}
                title={'Регистрация'}
                onPress={() => {
                    navigation.push('Registration')
                }}/>
        </Contianer>
    )
}
export default Login
