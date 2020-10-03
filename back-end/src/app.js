const {GraphQLServer} = require('graphql-yoga')
const {PrismaClient} = require('@prisma/client')
const {PrismaSelect} = require('@paljs/plugins')
const {typeDefs} = require('./graphql/typeDefs')
const {resolvers} = require('./graphql/resolvers')
const {checkRole} = require('./utils/auth')

require('dotenv').config()

const prisma = new PrismaClient()

const middleware = async (resolve, root, args, context, info) => {
    const result = new PrismaSelect(info).value
    if (Object.keys(result.select).length > 0) {
        args = {
            ...args,
            ...result,
        }
    }
    return resolve(root, args, context, info)
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    middlewares: [middleware],
    context: (req) => {
        const {authorization} = req.request.headers

        const access = {
            user: () => checkRole(authorization, 'user', prisma, true),
            business: () => checkRole(authorization, 'business', prisma, true),
            or: async (...roles) => {
                const checks = await Promise.all(roles.map(async role => {
                    return await checkRole(authorization, role, prisma, false)
                }))
                const find = checks.find(object => object)

                if (find) {
                    return find
                } else {
                    throw new Error('Not access')
                }
            }
        }
        return {
            prisma,
            access
        }
    }
})
server.start({port: 7777}, () => console.log('Server is running on localhost:7777'))
