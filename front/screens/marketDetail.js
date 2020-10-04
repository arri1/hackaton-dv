import React, {useCallback, useState} from 'react'
import {Button, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import styled from 'styled-components'
import {useApolloClient, useMutation} from '@apollo/react-hooks'
import {ADD_ORDER} from "../gqls/order/mutations"
import LoadingBar from "../components/loadingBar"
import {USER} from "../gqls/user/queries"

const Container = styled(View)`
    flex-direction: column;
    margin: 15px;
    flex: 1;
`

const MarketDetail = ({navigation, route}) => {
    const apollo = useApolloClient()
    const businessId = route.params.businessId
    const {address, userId} = useCallback(async () => {
        const {user} = await apollo.query({query: USER, fetchPolicy: 'cache-first', errorPolicy: 'ignore'})
        return {
            address: user.address,
            userId: user.id
        }
    })

    const [selectedItems, setSelectedItems] = useState([])
    navigation.setOptions({title: route.params.name})

    const [createOrder, {loading}] = useMutation(ADD_ORDER, {
        onCompleted: () => {

        },
        onError: () => {

        }
    })
    if (loading)
        return <LoadingBar/>

    const products = route.params.products
    return (
        <Container>
            <ScrollView style={{flex: 1}}>
                {
                    products.map(item => {
                        return (
                            <TouchableOpacity
                                style={
                                    {
                                        borderRadius: 20,
                                        paddingHorizontal: 24,
                                        paddingVertical: 10,
                                        borderWidth: 1,
                                        borderColor: '#828a82',
                                        flexDirection: 'column',
                                        marginBottom: 15,
                                        backgroundColor: selectedItems.includes(item.id) ? 'green' : 'gray'
                                    }
                                }
                                key={item.id}
                                onPress={() => {
                                    if (selectedItems.includes(item.id)) {
                                        setSelectedItems(selectedItems.pop(item.id))
                                        return null
                                    }
                                    setSelectedItems([...selectedItems, item.id])
                                }}
                            >
                                <Text
                                    style={{fontWeight: 'bold'}}
                                >{item.name}</Text>
                                <Text
                                    style={{marginTop: 8}}
                                >{item.description}</Text>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        marginTop: 8,
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Text>Стоимость</Text>
                                    <Text
                                    >{item.cost}</Text>
                                </View>


                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
            <Button
                onPress={() => {
                    createOrder({
                        variables: {
                            data: {
                                address,
                                comment: 'ух ты!',
                                status: 'AWAITED',
                                business: {connect: {id: businessId}},
                                user: {connect: {id: userId}},
                                products: {
                                    create:{
                                        count:1,
                                        product:{connect:{id:''}}
                                    }
                                }
                            }
                        }
                    })
                }}
                title={'Заказать'}/>
        </Container>
    )
}
export default MarketDetail
