import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductDetail = (props) => {
    const productData = props.location.state.state.record
    console.log('efwwe', productData)
    return (
        <Container>
         <div>name: {productData.name}</div>
         <div> cost: {productData.cost}</div>
         <div>description: {productData.description}</div>
         <div>id: {productData.id}</div>
        </Container>
    )
}

export default ProductDetail
