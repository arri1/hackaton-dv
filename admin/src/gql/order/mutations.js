import gql from 'graphql-tag'
export const UPDATE_ORDER= gql`
    mutation ($data:OrderUpdateInput! $where:OrderWhereUniqueInput!){
        updateOneOrder(where:$where data:$data){
            id
        }
    }
`
