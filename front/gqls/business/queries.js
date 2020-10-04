import gql from 'graphql-tag'

export const GET_BUSINESS=gql`
    query {
        findManyBusiness{
            id
            description
            address
            name
            type
            products{
                name
                cost
                description
                id
            }
        }
    }
`
