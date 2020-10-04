import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Title } from '../components/textStyled'
import { message, Spin, Input, Button } from 'antd'
import { Content } from '../components/loginStyle'
import { BUSINESS, BUSSIN } from '../gql/business/query'
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
        onCompleted: ({ businessWhereUniqueInput: { Business, token } }) => {
            localStorage.setItem('token', token)
            client.writeQuery({ query: BUSSIN, data: { Business } })
            message.success('все хорошо')
        },
        onError: (err) => {
            message.error('что-то пошло не так')
        }
    })
    const [userData, setUserData] = useState()
    const [name, setName] = useState()
    const [login, setLogin] = useState()
    const [description, setDescription] = useState()
    const [address, setAdress] = useState()
    const [type, setType] = useState()
    const [password, setPassword] = useState()
    const [createdAt, setCreatedAt] = useState()
    const [updatedAt, setUpdatedAt] = useState()
    const [orders, setOrders] = useState()
    const [products, setProducts] = useState()
    useQuery(BUSSIN, {
        onCompleted: ({ business }) => {
            setUserData(business)
            setName(business.name)
            setLogin(business.login)
            setDescription(business.description)
            setAdress(business.address)
            setType(business.type)
            setPassword(business.password)
            setUpdatedAt(business.updatedAt)
            setCreatedAt(business.createdAt)
            setOrders(business.orders)
            setProducts(business.products)
            console.log('efe', business)
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
                    createdAt,
                    orders,
                    updatedAt,
                    products
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
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'createdAt'}
                    value={createdAt}
                    onChange={(event) => {
                        setCreatedAt(event.target.value)
                    }}
                />
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'updatedAt'}
                    value={updatedAt}
                    onChange={(event) => {
                        setUpdatedAt(event.target.value)
                    }}
                />
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'orders'}
                    value={orders}
                    onChange={(event) => {
                        setOrders(event.target.value)
                    }}
                />
                <Input
                    style={{ marginTop: 15 }}
                    placeholder={'product'}
                    value={products}
                    onChange={(event) => {
                        setProducts(event.target.value)
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
