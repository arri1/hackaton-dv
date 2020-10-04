import gql from 'graphql-tag'

export const ADD_ORDER = gql`
    mutation ($data:OrderCreateInput!){
        createOneOrder(data: $data){
            id
        }
    }
`
