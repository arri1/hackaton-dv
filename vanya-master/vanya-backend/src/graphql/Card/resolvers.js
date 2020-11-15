const { PrismaSelect } = require('@paljs/plugins');
const { processUpload } = require('../../utils/upload')

const Card = {
    Query: {
        cards: async (_parent, ctx, {prisma}, info) => {
            const select = new PrismaSelect(info).value;
            return prisma.card.findMany({orderBy: [{ title: 'desc' }], ...select})
        }
    },
    Mutation: {
        createCard: async (_parent, { file, data }, { prisma }, info) => {
            const FileName = await processUpload(file)
            const File = await prisma.file.create({data: {path: FileName}})
            data = {...data, icon: { connect : { id: File.id }}}
            const select = new PrismaSelect(info).value;
            return prisma.card.create({data, ...select}) 
        }
    }
}

module.exports = {
    Card
}
