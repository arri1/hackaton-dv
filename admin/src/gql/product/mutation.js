import gql from 'graphql-tag'
export const CREATE_ONE_PRIVATE_PRODUCT=gql`
    mutation ($data:ProductCreatePrivateInput!){
        createOnePrivateProduct(data: $data){
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
