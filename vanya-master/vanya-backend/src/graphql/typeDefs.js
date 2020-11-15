const { Card } = require('./Card/typeDefs')
const { mergeTypeDefs } = require('@graphql-tools/merge')

const typeDefs = mergeTypeDefs([Card])

module.exports = { typeDefs }
