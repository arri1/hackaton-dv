import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
    query ($where:ProductWhereInput!){
        findManyProduct(where: $where){
            id
            description
            cost
            name
        }
    }
`
