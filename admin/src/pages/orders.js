import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useLazyQuery, useMutation} from '@apollo/react-hooks'
import {FIND_MANY_ORDERS} from "../gql/order/query"
import {Title} from "../components/textStyled"
import {Button, Table, Tag} from "antd"
import {BUSINESS} from "../gql/business/query"
import {UPDATE_ORDER} from "../gql/order/mutations"

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
    CANCELED: {
        value: 'Отменен',
        color: 'red'
    },
}

const Orders = () => {
    const [businessId, setBusinessId] = useState([])

    useEffect(() => {
        getId()
    }, [])

    const [getId] = useLazyQuery(BUSINESS, {
        onError: () => {
        },
        onCompleted: ({business}) => {
            getOrders({
                variables: {
                    where: {
                        businessId: {
                            equals: business.id
                        }
                    },
                    orderBy: {
                        status: 'asc'
                    }
                }
            })
            setBusinessId(business.id)
        },
        fetchPolicy: 'cache-first'
    })

    const [getOrders, {refetch, data}] = useLazyQuery(FIND_MANY_ORDERS, {
        onCompleted: ({findManyOrder}
        ) => {
            console.log('findManyOrder', findManyOrder)

        },
        onError: () => {
        },
    })
    const [onAccept] = useMutation(UPDATE_ORDER, {
        onCompleted: () => {
            console.log(businessId)
            if (businessId)
                refetch({
                    variables: {
                        where: {
                            businessId:
                                {equals: businessId}
                        },
                        orderBy: {
                            status: 'asc'
                        }
                    }
                })
        },
        onError: () => {
        }
    })

    return (
        <Container>
            <Title>Заказы</Title>
            <Table
                dataSource={data&&data.findManyOrder ? data.findManyOrder.map((item) => {
                    return {
                        address: item.address,
                        comment: item.comment,
                        status: item.status,
                        id: item.id
                    }
                }) : []}
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
                        (id) => {
                            return (
                                <div>
                                    <Button
                                        type='primary'
                                        onClick={
                                            () => {
                                                onAccept({
                                                    variables: {
                                                        data: {
                                                            status: {
                                                                set: 'INPROGRESS'
                                                            }
                                                        },
                                                        where: {id}
                                                    }
                                                })
                                            }
                                        }
                                    >
                                        Принять
                                    </Button>
                                    <Button
                                        type='primary'
                                        style={{marginLeft: 8}}
                                        danger
                                        onClick={
                                            () => {
                                                onAccept({
                                                    variables: {
                                                        data: {
                                                            status: {
                                                                set: 'CANCELED'
                                                            }
                                                        },
                                                        where: {id}
                                                    }
                                                })
                                            }
                                        }
                                    >
                                        Отклонить
                                    </Button>
                                </div>)
                        }
                    }
                />
            </Table>
        </Container>
    )
}

export default Orders
