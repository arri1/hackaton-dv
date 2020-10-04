import gql from 'graphql-tag'

export const REGISTRATION_BUSINESS = gql`
    mutation($data: RegistrationBusinessInput!) {
        registrationOneBusiness(data: $data) {
            token
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
    }
`

export const UPDATE_BUSSINESS = gql`
    mutation ($where:BusinessWhereUniqueInput! $data:BusinessUpdateInput!){
        businessWhereUniqueInput(where: $where data:$data) {
            business{
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
`

export const AUTH_BUSINESS = gql`
    mutation($data: AuthBusinessInput!) {
        authBusiness(data: $data) {
            token
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
    }
`
