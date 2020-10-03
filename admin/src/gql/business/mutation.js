import gql from 'graphql-tag'

export const REGISTRATION_BUSINESS = gql`
    mutation ($data:RegistrationBusinessInput!){
        registrationOneBusiness(data: $data){
            token
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
    }
`
export const AUTH_BUSINESS = gql`
    mutation ($data:AuthBusinessInput!){
        authBusiness(data: $data){
            token
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
    }
`
