const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Business = {
    Query: {
        findOneBusiness: (_parent, args, {prisma}) => {
            return prisma.business.findOne(args)
        },
        findManyBusiness: (_parent, args, {prisma}) => {
            return prisma.business.findMany(args)
        },
        findManyBusinessCount: (_parent, args, {prisma}) => {
            return prisma.business.count(args)
        },
        aggregateBusiness: (_parent, args, {prisma}) => {
            return prisma.business.aggregate(args)
        },
        business: async (_parent, args, {prisma, access}) => {
            const {id} = await access.business()
            return prisma.business.findOne({where: {id}})
        }
    },
    Mutation: {
        registrationOneBusiness: async (_parent, {data}, {prisma}) => {
            const {password} = data
            passwordBcrypt = await bcrypt.hash(password, 10)
            data.password = passwordBcrypt
            const business = await prisma.business.create({data})
            const token = jwt.sign({id: business.id}, process.env.BUSINESS_SECRET)
            return {
                business,
                token
            }
        },
        authBusiness: async (_parent, {data}, {prisma}) => {
            const {password, login} = data
            const business = await prisma.business.findOne({where: {login}})
            const compare = bcrypt.compareSync(password, business.password)
            if (!compare) throw new Error('password incorrect')
            const token = await jwt.sign({id: business.id}, process.env.BUSINESS_SECRET)
            return {
                token,
                business
            }
        },
        createOneBusiness: (_parent, args, {prisma}) => {
            return prisma.business.create(args)
        },
        updateOneBusiness: (_parent, args, {prisma}) => {
            return prisma.business.update(args)
        },
        deleteOneBusiness: async (_parent, args, {prisma}) => {
            return prisma.business.delete(args)
        },
        upsertOneBusiness: async (_parent, args, {prisma}) => {
            return prisma.business.upsert(args)
        },
        deleteManyBusiness: async (_parent, args, {prisma}) => {
            return prisma.business.deleteMany(args)
        },
        updateManyBusiness: (_parent, args, {prisma}) => {
            return prisma.business.updateMany(args)
        },
    },
}

module.exports = {
    Business,
}
