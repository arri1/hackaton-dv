import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Title } from '../components/textStyled'
import { message, Spin, Input, Button } from 'antd'
import { Content } from '../components/loginStyle'
import { BUSSIN, BUSINESS } from '../gql/business/query'
import { useLazyQuery, useMutation, useQuery, useApolloClient } from '@apollo/react-hooks'
import { UPDATE_BUSSINESS } from '../gql/business/mutation'

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const Home = () => {
    const client = useApolloClient()

    const [onRegister, { loading }] = useMutation(UPDATE_BUSSINESS, {
        onCompleted: ({ businessWhereUniqueInput: { business, token } }) => {
            localStorage.setItem('token', token)
            client.writeQuery({ query: BUSSIN, data: { business } })
            message.success('все хорошо')
        },
        onError: (err) => {
            console.log('err', err)
        }
    })
    const [userData, setUserData] = useState()
    const [name, setName] = useState()
    const [login, setLogin] = useState()
    const [description, setDescription] = useState()
    const [address, setAdress] = useState()
    const [type, setType] = useState()
    const [password, setPassword] = useState()

    useQuery(BUSINESS, {
        onCompleted: ({ business }) => {
            setUserData(business)
            setName(business.name)
            setLogin(business.login)
            setDescription(business.description)
            setAdress(business.address)
            setType(business.type)
        },
        onError: (err) => {
            console.log(err)
        }
    })
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
        if (login === '') {
            message.error('login')
        }
        onRegister({
            variables: {
                data: {
                    name,
                    type,
                    address,
                    description,
                    login,
                    password
                }
            }
        })
    }

    console.log('user', userData)
    return (
        <Container>
            <Title>Мой профиль</Title>
            <Content style={{ marginTop: 35 }}>
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'name'}
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'password'}
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'login'}
                    value={login}
                    onChange={(event) => {
                        setLogin(event.target.value)
                    }}
                />
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'description'}
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                />
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'address'}
                    value={address}
                    onChange={(event) => {
                        setAdress(event.target.value)
                    }}
                />
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'type'}
                    value={type}
                    onChange={(event) => {
                        setType(event.target.value)
                    }}
                />
                <Button style={{ marginTop: 20 }} onClick={postUser}>
                    Изменить
                </Button>
            </Content>
        </Container>
    )
}
export default Home
