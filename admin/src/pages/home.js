import React from 'react'
import styled from 'styled-components'
import {Title } from '../components/textStyled'

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
const Home = () => {
    return (
        <Container>
            <Title>Главное</Title>
        </Container>
    )
}
export default Home
