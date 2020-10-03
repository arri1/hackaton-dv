import React, {useEffect, useState} from "react"
import styled from 'styled-components'
import {Title} from "../components/textStyled"
import {Table} from "antd"
import {useLazyQuery, useQuery} from '@apollo/react-hooks'
import {BUSINESS} from "../gql/business/query"
import {GET_PRODUCTS} from "../gql/product/query"

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const Products = () => {
    const [businessId, setBusinessId] = useState(null)

    useQuery(BUSINESS, {
        onCompleted: ({business}) => {
            setBusinessId(business.id)
        },
        onError: () => {

        },
        fetchPolicy: 'cache-first'
    })
    const [getProducts] = useLazyQuery(GET_PRODUCTS, {
        onCompleted: () => {

        },
        onError: () => {
        }
    })
    useEffect(
        () => {
            getProducts({
                variables: {
                    where: {
                        businessId: {equals: businessId}
                    }
                }
            })
        }, [businessId])
    return (
        <Container>
            <Title>Товары</Title>
            <Table style={{marginTop: 30}} dataSource={dataSource} columns={columns}/>;
        </Container>
    )
}
export default Products
