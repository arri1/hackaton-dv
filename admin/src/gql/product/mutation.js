import gql from 'graphql-tag'
export const CREATE_ONE_BUSINESS=gql`
    mutation ($data:ProductCreateInput!){
        createOneProduct(data: $data){
            id
            createdAt
            updatedAt
            name
            description
            cost
            businessId
        }
    }
`
