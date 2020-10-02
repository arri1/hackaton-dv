const Products = {
  Query: {
    findOneProducts: (_parent, args, { prisma }) => {
      return prisma.products.findOne(args)
    },
    findManyProducts: (_parent, args, { prisma }) => {
      return prisma.products.findMany(args)
    },
    findManyProductsCount: (_parent, args, { prisma }) => {
      return prisma.products.count(args)
    },
    aggregateProducts: (_parent, args, { prisma }) => {
      return prisma.products.aggregate(args)
    },
  },
  Mutation: {
    createOneProducts: (_parent, args, { prisma }) => {
      return prisma.products.create(args)
    },
    updateOneProducts: (_parent, args, { prisma }) => {
      return prisma.products.update(args)
    },
    deleteOneProducts: async (_parent, args, { prisma }) => {
      return prisma.products.delete(args)
    },
    upsertOneProducts: async (_parent, args, { prisma }) => {
      return prisma.products.upsert(args)
    },
    deleteManyProducts: async (_parent, args, { prisma }) => {
      return prisma.products.deleteMany(args)
    },
    updateManyProducts: (_parent, args, { prisma }) => {
      return prisma.products.updateMany(args)
    },
  },
}

module.exports = {
  Products,
}
