const { default: gql } = require('graphql-tag')

const Business = gql`
  type Business {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    description: String!
    type: String!
    address: String!
    location: String!
    Product(
      where: ProductWhereInput
      orderBy: ProductOrderByInput
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: ProductDistinctFieldEnum
    ): [Product!]!
  }

  type Query {
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
