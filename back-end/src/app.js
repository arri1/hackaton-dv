const {GraphQLServer} = require('graphql-yoga')
const {PrismaClient} = require('@prisma/client')
const {PrismaSelect} = require('@paljs/plugins')
const dotenv = require('dotenv')
const {typeDefs} = require('./graphql/typeDefs')
const {resolvers} = require('./graphql/resolvers')
dotenv.config()

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
        return {
            prisma
        }
    }
})
server.start({port:7777},() => console.log('Server is running on localhost:7777'))
