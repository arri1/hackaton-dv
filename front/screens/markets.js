import React from 'react'
import styled from 'styled-components'
import { Text, TouchableOpacity, View, ScrollView } from 'react-native'
import Card from './../components/card'
const Container = styled(View)`
    align-items: center;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    margin-top: 14px;
`

const MainCard = styled(View)`
    flex: 1;
`

const data = [
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Ашан',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    },
    {
        id: '3122',
        login: 'gold9208',
        name: 'Пятерочка',
        type: 'Продукты',
        description: 'Мы продаем какие-то продукты.Звоните по какому-то номеру!',
        address: 'Lenina 1',
        location: 'Vlad',
        product: 'Apple',
        orders: 'Meet'
    }
]
const Markets = ({ navigation }) => {
    return (
        <Container>
            <ScrollView>
                <MainCard>
                    {data.map((item) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('MarketDetail', {
                                        name:item.name,
                                        description:item.description,
                                        type:item.type
                                    })
                                }}
                            >
                                <Card
                                    name={item.name}
                                    description={item.description}
                                    type={item.type}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </MainCard>
            </ScrollView>
        </Container>
    )
}
export default Markets
