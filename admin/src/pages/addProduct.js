import React, {useState} from 'react'
import styled from 'styled-components'
import {FieldTitle, Title} from '../components/textStyled'
import {Button, Input, message} from 'antd'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_ONE_PRIVATE_PRODUCT} from '../gql/product/mutation'
import LoadingBar from '../components/loadingBar'

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
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState(0)

    const [createOneProduct, {loading}] = useMutation(CREATE_ONE_PRIVATE_PRODUCT, {
        onCompleted: () => {
            message.success('Добавлено')
        },
        onError: () => {
            message.error('Что то пошло не так')
        }
    })

    const onAdd = () => {
        if (name === '') {
            message.error('Введите имя')
            return null
        }

        if (description === '') {
            message.error('Введите описание')
            return null
        }
        createOneProduct({
            variables: {
                data: {
                    name,
                    description,
                    cost: cost + ''
                }
            }
        })
    }

    if (loading)
        return <LoadingBar/>

    return (
        <Container>
            <Title>Добавление товаров</Title>
            <Content>
                <Item>
                    <FieldTitle>Название</FieldTitle>
                    <Input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        style={{marginTop: 16}}
                        placeholder={'Введите название'}/>
                </Item>
                <Item>
                    <FieldTitle>Описание</FieldTitle>
                    <Input
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        style={{marginTop: 16}}
                        placeholder={'Введите описание'}/>
                </Item>
                <Item>
                    <FieldTitle>Стоимость</FieldTitle>
                    <Input
                        value={cost}
                        onChange={(e) => {
                            setCost(e.target.value)
                        }}
                        style={{marginTop: 16}}
                        type={'number'}
                        placeholder={'Введите стоимость'}/>
                </Item>
            </Content>
            <Button onClick={onAdd}>Добавить</Button>
        </Container>
    )
}
export default AddProudct
