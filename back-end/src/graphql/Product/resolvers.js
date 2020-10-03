const Product = {
    Query: {
        findOneProduct: (_parent, args, {prisma}) => {
            return prisma.product.findOne(args)
        },
        findManyProduct: (_parent, args, {prisma}) => {
            return prisma.product.findMany(args)
        },
        findManyProductCount: (_parent, args, {prisma}) => {
            return prisma.product.count(args)
        },
        aggregateProduct: (_parent, args, {prisma}) => {
            return prisma.product.aggregate(args)
        },
    },
    Mutation: {
        createOneProduct: async (_parent, args, {prisma, access}) => {
            const {id} = await access.business()
            args.data.business = id
            return prisma.product.create(args)
        },
        updateOneProduct: (_parent, args, {prisma}) => {
            return prisma.product.update(args)
        },
        deleteOneProduct: async (_parent, args, {prisma}) => {
            return prisma.product.delete(args)
        },
        upsertOneProduct: async (_parent, args, {prisma}) => {
            return prisma.product.upsert(args)
        },
        deleteManyProduct: async (_parent, args, {prisma}) => {
            return prisma.product.deleteMany(args)
        },
        updateManyProduct: (_parent, args, {prisma}) => {
            return prisma.product.updateMany(args)
        },
    },
}

module.exports = {
    Product,
}
