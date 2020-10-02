const { default: gql } = require('graphql-tag')

const Products = gql`
  type Products {
    id: String!
    product: Product!
    count: Int!
    Order: Order
    orderId: String
    productId: String!
  }

  type Query {
    findOneProducts(where: ProductsWhereUniqueInput!): Products
    findManyProducts(
      where: ProductsWhereInput
      orderBy: [ProductsOrderByInput!]
      cursor: ProductsWhereUniqueInput
      distinct: ProductsDistinctFieldEnum
      skip: Int
      take: Int
    ): [Products!]
    findManyProductsCount(
      where: ProductsWhereInput
      orderBy: [ProductsOrderByInput!]
      cursor: ProductsWhereUniqueInput
      distinct: ProductsDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateProducts(
      where: ProductsWhereInput
      orderBy: [ProductsOrderByInput!]
      cursor: ProductsWhereUniqueInput
      distinct: ProductsDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateProducts
  }
  type Mutation {
    createOneProducts(data: ProductsCreateInput!): Products!
    updateOneProducts(
      where: ProductsWhereUniqueInput!
      data: ProductsUpdateInput!
    ): Products!
    deleteOneProducts(where: ProductsWhereUniqueInput!): Products
    upsertOneProducts(
      where: ProductsWhereUniqueInput!
      create: ProductsCreateInput!
      update: ProductsUpdateInput!
    ): Products
    deleteManyProducts(where: ProductsWhereInput): BatchPayload
    updateManyProducts(
      where: ProductsWhereInput
      data: ProductsUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Products,
}
