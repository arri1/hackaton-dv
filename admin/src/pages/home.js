import React from 'react'
import styled from 'styled-components'
import { Title, Lable } from './../components/textStyled'
import Card from './../components/card'
import { StarOutlined, StarFilled } from '@ant-design/icons'

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
const CustomTitle = styled(Title)``

const CardRow = styled.div`
    display: flex;
    flex-direction: row;
`
const GrayBack = styled.div`
    background-color: #f0f2f5;
    width: 100%;
    height: 30vh;
`

const data = [
    {
        title: 'qwe',
        count: 1
    },
    {
        title: 'qwe',
        count: 1
    },
    {
        title: 'qwe',
        count: 1
    },
    {
        title: 'qwe',
        count: 1
    },
    {
        title: 'qwe',
        count: 1
    }
]
const Home = () => {
    return (
        <Container>
            <GrayBack>
                <Title style={{ marginTop: 51, marginLeft: 44 }}>Статистика</Title>
                <CardRow>
                    {data.map((item) => {
                        return <Card title={item.title} count={item.count} />
                    })}
                </CardRow>
            </GrayBack>
            <div style={{ padding: '40px' }}>
                <Title>Главное</Title>
                <div style={{ padding: '60px' }}>
                    <Lable>Пятерочка</Lable>
                </div>
            </div>
        </Container>
    )
}
export default Home
