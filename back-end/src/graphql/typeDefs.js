const { Product } = require('./Product/typeDefs')
const { Business } = require('./Business/typeDefs')
const { User } = require('./User/typeDefs')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const { sdlInputs } = require('@paljs/plugins')

const typeDefs = mergeTypeDefs([sdlInputs(), User, Business, Product])

module.exports = { typeDefs }
