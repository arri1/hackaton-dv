import React, {useState} from 'react'
import styled from 'styled-components'
import {useQuery} from '@apollo/react-hooks'
import {ScrollView, TouchableOpacity, View} from 'react-native'
import {GET_BUSINESS} from "../gqls/business/queries"
import LoadingBar from "../components/loadingBar"
import {useNavigation} from '@react-navigation/native';
import Card from "../components/card"

const Container = styled(View)`
    align-items: center;
    flex-direction: row;
    flex: 1;
    justify-content: center;
`

const MainCard = styled(View)`
    padding-top: 14px;
    flex: 1;
`

const Markets = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([])
    const {loading} = useQuery(GET_BUSINESS, {
        onCompleted: ({findManyBusiness}) => {
            setData(findManyBusiness)
        }
    })
    if (loading)
        return <LoadingBar/>

    return (
        <Container>
            <ScrollView>
                <MainCard>
                    {data.map((item) => {
                        return (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => {
                                    navigation.navigate('MarketDetail', {
                                        businessId: item.id,
                                        name: item.name,
                                        description: item.description,
                                        type: item.type,
                                        products: item.products
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
