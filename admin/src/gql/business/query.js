import gql from 'graphql-tag'
export const BUSINESS = gql`
    query {
        business{
            name,
            login,
            location
            address,
            id
            createdAt
            updatedAt
            description
            type
        }
    }
`
