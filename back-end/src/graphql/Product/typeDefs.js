const { default: gql } = require('graphql-tag')

const Product = gql`
  type Product {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String!
    cost: String!
    count: String!
    business: Business!
    businessId: String!
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
    createOneProduct(data: ProductCreateInput!): Product!
    updateOneProduct(
      where: ProductWhereUniqueInput!
      data: ProductUpdateInput!
    ): Product!
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
  Product,
}
