const { default: gql } = require('graphql-tag')

const Product = gql`
    input ProductCreatePrivateInput {
        cost: String!
        createdAt: DateTime
        description: String!
        id: String
        name: String!
        updatedAt: DateTime
    }
    type Product {
        id: String!
        createdAt: DateTime!
        updatedAt: DateTime!
        name: String!
        description: String!
        cost: String!
        business: Business!
        businessId: String!
        Products(
            where: ProductsWhereInput
            orderBy: ProductsOrderByInput
            cursor: ProductsWhereUniqueInput
            take: Int
            skip: Int
            distinct: ProductsDistinctFieldEnum
        ): [Products!]!
    }

    type Query {
        findOneProduct(where: ProductWhereUniqueInput!): Product
        findManyProduct(
            where: ProductWhereInput
            orderBy: [ProductOrderByInput!]
            cursor: ProductWhereUniqueInput
            distinct: ProductDistinctFieldEnum
            skip: Int
            take: Int
        ): [Product!]
        findManyProductCount(
            where: ProductWhereInput
            orderBy: [ProductOrderByInput!]
            cursor: ProductWhereUniqueInput
            distinct: ProductDistinctFieldEnum
            skip: Int
            take: Int
        ): Int!
        aggregateProduct(
            where: ProductWhereInput
            orderBy: [ProductOrderByInput!]
            cursor: ProductWhereUniqueInput
            distinct: ProductDistinctFieldEnum
            skip: Int
            take: Int
        ): AggregateProduct
    }
    type Mutation {
        createOnePrivateProduct(data: ProductCreatePrivateInput!): Product!
        createOneProduct(data: ProductCreateInput!): Product!
        updateOneProduct(where: ProductWhereUniqueInput!, data: ProductUpdateInput!): Product!
        deleteOneProduct(where: ProductWhereUniqueInput!): Product
        upsertOneProduct(
            where: ProductWhereUniqueInput!
            create: ProductCreateInput!
            update: ProductUpdateInput!
        ): Product
        deleteManyProduct(where: ProductWhereInput): BatchPayload
        updateManyProduct(
            where: ProductWhereInput
            data: ProductUpdateManyMutationInput
        ): BatchPayload
    }
`

module.exports = {
    Product
}
