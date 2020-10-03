import React from 'react'
import styled from 'styled-components'
import { FieldTitle, Title } from '../components/textStyled'
import { Input } from 'antd'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Content = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-right: 16px;
`
const AddProudct = () => {

    return (
        <Container>
            <Title>Добавление товаров</Title>
            <Content>
                <Item>
                    <FieldTitle>Бизнес</FieldTitle>
                    <Input style={{ marginTop: 16 }} placeholder={'Введите ид бизнеса'} />
                </Item>
                <Item>
                    <FieldTitle>Название</FieldTitle>
                    <Input style={{ marginTop: 16 }} placeholder={'Введите название'} />
                </Item>
                <Item>
                    <FieldTitle>Описание</FieldTitle>
                    <Input style={{ marginTop: 16 }} placeholder={'Введите описание'} />
                </Item>
                <Item>
                    <FieldTitle>Стоимость</FieldTitle>
                    <Input style={{ marginTop: 16 }} placeholder={'Введите стоимость'} />
                </Item>
            </Content>
        </Container>
    )
}
export default AddProudct
