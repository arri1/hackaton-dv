const { Product } = require('./Product/resolvers')
const { Business } = require('./Business/resolvers')
const { User } = require('./User/resolvers')

const resolvers = [User, Business, Product]

module.exports = { resolvers }
