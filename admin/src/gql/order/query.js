import gql from "graphql-tag"

export const FIND_MANY_ORDERS = gql`
    query ($where:OrderWhereInput!,$orderBy:OrderOrderByInput!){
        findManyOrder(where: $where orderBy: [$orderBy]){
            address
            status
            id
            user{
                id
                email
                phone
                name
            }
            comment
            products{
                count
                product{
                    id
                    name
                    description
                    cost
                }
            }
        }
    }
`
