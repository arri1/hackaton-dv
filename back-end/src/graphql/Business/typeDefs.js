const {default: gql} = require('graphql-tag')

const Business = gql`
    input AuthBusinessInput{
        password:String!
        login:String!
    }
    input RegistrationBusinessInput{
        login: String!
        password: String!
        name: String!
        description: String
        type: String
        location: String
        address: String
    }
    type RegistrationBusinessOutput{
        token:String!
        business:Business!
    }
    type Business {
        id: String!
        createdAt: DateTime!
        updatedAt: DateTime!
        login: String!
        name: String
        location: String
        description: String
        type: String
        address: String
        products(
            where: ProductWhereInput
            orderBy: ProductOrderByInput
            cursor: ProductWhereUniqueInput
            take: Int
            skip: Int
            distinct: ProductDistinctFieldEnum
        ): [Product!]!
        orders(
            where: OrderWhereInput
            orderBy: OrderOrderByInput
            cursor: OrderWhereUniqueInput
            take: Int
            skip: Int
            distinct: OrderDistinctFieldEnum
        ): [Order!]!
    }

    type Query {
        business:Business
        findOneBusiness(where: BusinessWhereUniqueInput!): Business
        findManyBusiness(
            where: BusinessWhereInput
            orderBy: [BusinessOrderByInput!]
            cursor: BusinessWhereUniqueInput
            distinct: BusinessDistinctFieldEnum
            skip: Int
            take: Int
        ): [Business!]
        findManyBusinessCount(
            where: BusinessWhereInput
            orderBy: [BusinessOrderByInput!]
            cursor: BusinessWhereUniqueInput
            distinct: BusinessDistinctFieldEnum
            skip: Int
            take: Int
        ): Int!
        aggregateBusiness(
            where: BusinessWhereInput
            orderBy: [BusinessOrderByInput!]
            cursor: BusinessWhereUniqueInput
            distinct: BusinessDistinctFieldEnum
            skip: Int
            take: Int
        ): AggregateBusiness
    }
    type Mutation {
        authBusiness(data:AuthBusinessInput!):RegistrationBusinessOutput!
        registrationOneBusiness(data: RegistrationBusinessInput!): RegistrationBusinessOutput!
        createOneBusiness(data: BusinessCreateInput!): Business!
        updateOneBusiness(
            where: BusinessWhereUniqueInput!
            data: BusinessUpdateInput!
        ): Business!
        deleteOneBusiness(where: BusinessWhereUniqueInput!): Business
        upsertOneBusiness(
            where: BusinessWhereUniqueInput!
            create: BusinessCreateInput!
            update: BusinessUpdateInput!
        ): Business
        deleteManyBusiness(where: BusinessWhereInput): BatchPayload
        updateManyBusiness(
            where: BusinessWhereInput
            data: BusinessUpdateManyMutationInput
        ): BatchPayload
    }
`

module.exports = {
    Business,
}
