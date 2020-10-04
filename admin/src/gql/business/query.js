import gql from 'graphql-tag'
export const BUSINESS = gql`
    query {
        business {
            name
            login
            location
            address
            id
            createdAt
            updatedAt
            description
            type
        }
    }
`

export const BUSSIN = gql`
    query($where: BusinessWhereUniqueInput!, $data: BusinessUpdateInput!) {
        businessWhereUniqueInput(where: $where, data: $data) {
            id
            createdAt
            updatedAt
            login
            name
            location
            description
            type
            address
            products
            orders
        }
    }
`
