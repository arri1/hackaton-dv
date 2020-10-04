import React, { useState } from 'react'
import { Input, Content, Container, Button } from '../components/loginStyle'
import { Title } from '../components/textStyled'
import { message, Spin } from 'antd'
import { REGISTRATION_BUSINESS } from '../gql/business/mutation'
import { useApolloClient, useMutation } from '@apollo/react-hooks'
import { BUSINESS } from '../gql/business/query'
import { useHistory } from 'react-router-dom'
const Register = () => {
    const history = useHistory()
    const client = useApolloClient()

    const [onRegister, { loading }] = useMutation(REGISTRATION_BUSINESS, {
        onCompleted: ({ registrationOneBusiness: { business, token } }) => {
            localStorage.setItem('token', token)
            client.writeQuery({ query: BUSINESS, data: { business } })
            history.replace('/authorized/home')
        },
        onError: (err) => {
            console.log(err)
        }
    })
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [type, setType] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()
    const [login, setLogin] = useState()
    if (loading)
        return (
            <Container>
                <Content>
                    <Spin />
                </Content>
            </Container>
        )

    const postUser = () => {
        if (name === '') {
            message.error('name err')
            return null
        }
        if (description === '') {
            message.error('description err')
            return null
        }
        if (type === '') {
            message.error('type err')
            return null
        }
        if (address === '') {
            message.error('address err')
            return null
        }
        onRegister({
            variables: {
                data: {
                    name,
                    password,
                    type,
                    address,
                    description,
                    login
                }
            }
        })
    }
    return (
        <Container>
            <Content>
                <Title>Регистрация</Title>
                <Input
                    placeholder={'name'}
                    style={{ marginTop: 25 }}
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
                <Input
                    placeholder={'login'}
                    style={{ marginTop: 25 }}
                    value={login}
                    onChange={(event) => {
                        setLogin(event.target.value)
                    }}
                />
                <Input
                    placeholder={'password'}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <Input
                    placeholder={'description'}
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                />
                <Input
                    placeholder={'type'}
                    value={type}
                    onChange={(event) => {
                        setType(event.target.value)
                    }}
                />
                <Input
                    placeholder={'address'}
                    value={address}
                    onChange={(event) => {
                        setAddress(event.target.value)
                    }}
                />
                <Button onClick={postUser}>Войти</Button>
            </Content>
        </Container>
    )
}

export default Register
