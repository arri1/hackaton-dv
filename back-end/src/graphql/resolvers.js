const { Products } = require('./Products/resolvers')
const { Order } = require('./Order/resolvers')
const { Product } = require('./Product/resolvers')
const { Business } = require('./Business/resolvers')
const { User } = require('./User/resolvers')

const resolvers = [User, Business, Product, Order, Products]

module.exports = { resolvers }
