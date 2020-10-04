import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Title } from '../components/textStyled'
import { useLazyQuery, useQuery } from '@apollo/react-hooks'
import { BUSINESS } from '../gql/business/query'
import { GET_PRODUCTS } from '../gql/product/query'
import LoadingBar from '../components/loadingBar'
import { Table } from 'antd'
import { useHistory } from 'react-router-dom'
const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
const columns = [
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Стоимость',
        dataIndex: 'cost',
        key: 'cost'
    }
]
const Products = () => {
    const [businessId, setBusinessId] = useState(null)
    const [product, setProduct] = useState([])
    const history = useHistory()
    const { loading: businessLoading } = useQuery(BUSINESS, {
        onCompleted: ({ business }) => {
            setBusinessId(business.id)
        },
        onError: () => {},
        fetchPolicy: 'cache-first'
    })
    const [getProducts, { loading: productLoading }] = useLazyQuery(GET_PRODUCTS, {
        onCompleted: (data) => {
            console.log('data', data.findManyProduct)
            const productData = data.findManyProduct
            setProduct(productData)
            console.log('hook', product)
        },
        onError: (err) => {
            console.log('err', err)
        }
    })
    useEffect(() => {
        if (businessId) {
            getProducts({
                variables: {
                    where: {
                        businessId: { equals: businessId }
                    }
                }
            })
        }
    }, [businessId])

    if (businessLoading || productLoading) {
        return <LoadingBar />
    }

    return (
        <Container>
            <Title>Товары</Title>
            <Table
                style={{ marginTop: 30 }}
                dataSource={product}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            history.push('/authorized/productDetail', {
                                state: { record: record }
                            })
                        }
                    }
                }}
            />
        </Container>
    )
}
export default Products
