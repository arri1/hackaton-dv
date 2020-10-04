import React,{useState} from 'react'
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
`

const MainCard = styled(View)`
    padding-top: 14px;
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
                                onPress={() => {
                                    navigation.navigate('MarketDetail', {
                                        name: item.name,
                                        description: item.description,
                                        type: item.type
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
