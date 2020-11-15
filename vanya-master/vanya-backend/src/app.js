const { PrismaClient } = require('@prisma/client')
const { GraphQLServer } = require('graphql-yoga')
const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers')
const upload = require('./utils/upload')
// const { checkRole } = require('./utils/auth')
require('dotenv').config()

process.env.TZ = 'UTC'

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('Сервер для картинок был запущен по:' + port)
})

const prisma = new PrismaClient()

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    // middlewares: [PrismaSelect],
    context: (req) => {
        const { authorization } = req.request.headers
        // const access = async (...roles) => {
        //     roles.push('admin')
        //     const checks = await Promise.all(
        //         roles.map(async (role) => {
        //             return await checkRole(authorization, role, prisma, false)
        //         })
        //     )
        //     const find = checks.find((object) => object)
        //     if (find) {
        //         return find
        //     } else {
        //         throw new Error('Not access')
        //     }
        // }
        // const checkToken = async () => {
        //     const roles = ['USER', 'ADMIN', 'EXPERT']
        //     const checks = await Promise.all(
        //         roles.map(async (role) => {
        //             return await checkRole(authorization, role, prisma, false)
        //         })
        //     )
        //     const find = checks.find((object) => object)
        //     if (find) {
        //         return find
        //     } else {
        //         throw new Error('Token timeout')
        //     }
        // }
        // const access = {
        //     user: (user) => checkRole(authorization, 'USER', prisma, true),
        //     or: async (...roles) => {
        //         const checks = await Promise.all(roles.map(async role => {
        //             return await checkRole(authorization, role, prisma, false)
        //         }));
        //         const find = checks.find(object => object);

        //         if (find) {
        //             return find
        //         } else {
        //             throw new Error('Not access')
        //         }
        //     }
        return {
            prisma
            // access,
            // checkToken
        }
    }
})
const PORT = process.env.PORT || process.env.SERVER_PORT || 4000

server.start(
    {
        port: PORT,
        playground: '/playground',
        endpoint: '/graphql',
        uploads: { maxFieldSize: 1000000000, maxFileSize: 1000000000 }
    },
    () => {
        console.log(`Server is running on localhost:${PORT}`)
    }
)
