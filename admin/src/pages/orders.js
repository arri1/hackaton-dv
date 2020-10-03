import React, {useState} from 'react'
import styled from 'styled-components'
import {useLazyQuery, useQuery} from '@apollo/react-hooks'
import {FIND_MANY_ORDERS} from "../gql/order/query"
import {Title} from "../components/textStyled"
import {Button, Table, Tag} from "antd"
import {BUSINESS} from "../gql/business/query"

const {Column} = Table

const Container = styled.div`
  display: flex;
  flex: 1;  
  flex-direction: column;
`
const statusMap = {
    AWAITED: {
        value: 'В ожидании',
        color: 'blue'
    },
    DONE: {
        value: 'Завершено',
        color: 'gray'
    },
    INPROGRESS: {
        value: 'В действии',
        color: 'green'
    },
}

const Orders = () => {
    const [data, setData] = useState([])
    const [businessId, setBusinessId] = useState([])
    useQuery(BUSINESS, {
        onError: () => {
        },
        onCompleted: ({business}) => {
            getOrders({variables: {where: {businessId: {equals: business.id}}}})
        },
        fetchPolicy: 'cache-first'
    })

    const [getOrders] = useLazyQuery(FIND_MANY_ORDERS, {
        onCompleted: ({findManyOrder}
        ) => {
            setData(findManyOrder.map((item) => {
                return {
                    address: item.address,
                    comment: item.comment,
                    status: item.status,
                    id: item.id
                }
            }))
        },
        onError: () => {
        },
    })
    return (
        <Container>
            <Title>Заказы</Title>
            <Table
                dataSource={data}
                style={{marginTop: 30}}
            >

                <Column
                    title={'Адрес'}
                    dataIndex={'address'}
                    key={'address'}
                />
                <Column
                    title={'Коммент'}
                    dataIndex={'comment'}
                    key={'comment'}
                />
                <Column
                    title={'Статус'}
                    dataIndex={'status'}
                    key={'status'}
                    render={
                        (item) => {
                            return (
                                <Tag color={statusMap[item].color}>
                                    {statusMap[item].value}
                                </Tag>
                            )
                        }
                    }
                />
                <Column
                    title={'Действия'}
                    dataIndex={'id'}
                    key={'id'}
                    render={
                        (item) => {
                            return (
                                <div>
                                    <Button
                                        type='primary'>Принять</Button>
                                    <Button
                                        type='primary'
                                        style={{marginLeft:8}}
                                        danger>Отклонить</Button>
                                </div>)

                        }
                    }
                />
            </Table>
        </Container>
    )
}

export default Orders
