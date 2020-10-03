import gql from "graphql-tag"

export const FIND_MANY_ORDERS = gql`
    query ($where:OrderWhereInput!){
        findManyOrder(where: $where){
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
