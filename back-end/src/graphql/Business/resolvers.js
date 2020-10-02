const Business = {
  Query: {
    findOneBusiness: (_parent, args, { prisma }) => {
      return prisma.business.findOne(args)
    },
    findManyBusiness: (_parent, args, { prisma }) => {
      return prisma.business.findMany(args)
    },
    findManyBusinessCount: (_parent, args, { prisma }) => {
      return prisma.business.count(args)
    },
    aggregateBusiness: (_parent, args, { prisma }) => {
      return prisma.business.aggregate(args)
    },
  },
  Mutation: {
    createOneBusiness: (_parent, args, { prisma }) => {
      return prisma.business.create(args)
    },
    updateOneBusiness: (_parent, args, { prisma }) => {
      return prisma.business.update(args)
    },
    deleteOneBusiness: async (_parent, args, { prisma }) => {
      return prisma.business.delete(args)
    },
    upsertOneBusiness: async (_parent, args, { prisma }) => {
      return prisma.business.upsert(args)
    },
    deleteManyBusiness: async (_parent, args, { prisma }) => {
      return prisma.business.deleteMany(args)
    },
    updateManyBusiness: (_parent, args, { prisma }) => {
      return prisma.business.updateMany(args)
    },
  },
}

module.exports = {
  Business,
}
