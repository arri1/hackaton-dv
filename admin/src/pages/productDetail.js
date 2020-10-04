import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`
const Item = styled.div`
    display: flex;
    font-family: sans-serif;
    font-size: 20px;
    
`
const ProductDetail = (props) => {
    const productData = props.location.state.state.record
    console.log('efwwe', productData)
    return (
        <Container>
            <Item>Название: {productData.name}</Item>
            <Item>Стоимость: {productData.cost}</Item>
            <Item>Описание: {productData.description}</Item>
            <Item>id: {productData.id}</Item>
        </Container>
    )
}

export default ProductDetail
