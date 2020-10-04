import React, { useState } from 'react'
import styled from 'styled-components'
import { Lable, Title } from '../components/textStyled'
import { message, Spin, Input } from 'antd'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { AUTH_BUSINESS } from '../gql/business/mutation'
import { BUSINESS } from '../gql/business/query'
import { useHistory } from 'react-router-dom'
import { Container, Content, Button, ButtonDiv } from '../components/loginStyle'
const Login = () => {
    const client = useApolloClient()
    const history = useHistory()

    const [onAuth, { loading }] = useMutation(AUTH_BUSINESS, {
        onCompleted: ({ authBusiness: { business, token } }) => {
            localStorage.setItem('token', token)
            client.writeQuery({ query: BUSINESS, data: { business } })
            history.replace('/authorized/home')
        },
        onError: () => {}
    })
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    if (loading)
        return (
            <Container>
                <Content>
                    <Spin />
                </Content>
            </Container>
        )
    const onClick = () => {
        if (login === '') {
            message.error('не задан логин')
            return null
        }
        if (password === '') {
            message.error('не пароль')
            return null
        }
        onAuth({
            variables: {
                data: {
                    login,
                    password
                }
            }
        })
    }
    return (
        <Container>
            <Content style={{ marginBottom: 100 }}>
                <Title>Заход в систему</Title>
                <Input
                    style={{ marginTop: 25 }}
                    placeholder={'Введите логин'}
                    value={login}
                    onChange={(e) => {
                        setLogin(e.target.value)
                    }}
                />
                <Input
                    placeholder={'Введите пароль'}
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <ButtonDiv>
                    <Button onClick={onClick}>Войти</Button>

                    <Button
                        onClick={() => {
                            history.push('/register')
                        }}
                    >
                        Регистрация
                    </Button>
                </ButtonDiv>
            </Content>
        </Container>
    )
}
export default Login
