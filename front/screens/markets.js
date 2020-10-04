import React, {useState} from 'react'
import styled from 'styled-components'
import {useQuery} from '@apollo/react-hooks'
import {ScrollView, TouchableOpacity, View} from 'react-native'
import Card from './../components/card'
import {GET_BUSINESS} from "../gqls/business/queries"
import LoadingBar from "../components/loadingBar"

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

const Markets = ({navigation}) => {
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
                                        businessId:item.id,
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
