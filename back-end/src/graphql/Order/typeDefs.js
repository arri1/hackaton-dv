const { default: gql } = require('graphql-tag')

const Order = gql`
  type Order {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    address: String!
    comment: String!
    business: Business!
    businessId: String!
    products(
      where: ProductsWhereInput
      orderBy: ProductsOrderByInput
      cursor: ProductsWhereUniqueInput
      take: Int
      skip: Int
      distinct: ProductsDistinctFieldEnum
    ): [Products!]!
    User: User
    userId: String
  }

  type Query {
    findOneOrder(where: OrderWhereUniqueInput!): Order
    findManyOrder(
      where: OrderWhereInput
      orderBy: [OrderOrderByInput!]
      cursor: OrderWhereUniqueInput
      distinct: OrderDistinctFieldEnum
      skip: Int
      take: Int
    ): [Order!]
    findManyOrderCount(
      where: OrderWhereInput
      orderBy: [OrderOrderByInput!]
      cursor: OrderWhereUniqueInput
      distinct: OrderDistinctFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateOrder(
      where: OrderWhereInput
      orderBy: [OrderOrderByInput!]
      cursor: OrderWhereUniqueInput
      distinct: OrderDistinctFieldEnum
      skip: Int
      take: Int
    ): AggregateOrder
  }
  type Mutation {
    createOneOrder(data: OrderCreateInput!): Order!
    updateOneOrder(
      where: OrderWhereUniqueInput!
      data: OrderUpdateInput!
    ): Order!
    deleteOneOrder(where: OrderWhereUniqueInput!): Order
    upsertOneOrder(
      where: OrderWhereUniqueInput!
      create: OrderCreateInput!
      update: OrderUpdateInput!
    ): Order
    deleteManyOrder(where: OrderWhereInput): BatchPayload
    updateManyOrder(
      where: OrderWhereInput
      data: OrderUpdateManyMutationInput
    ): BatchPayload
  }
`

module.exports = {
  Order,
}
