import gql from 'graphql-tag'

export const AUTH = gql`
    mutation ($data:AuthUserInput!){
        authUser(data: $data){
            token
            user{
                id
            }
        }
    }
`
