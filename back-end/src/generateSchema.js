const {typeDefs} = require('./graphql/typeDefs')
const {resolvers} = require('./graphql/resolvers')
const {generateGraphQlSDLFile} = require('@paljs/plugins')
const {makeExecutableSchema} = require('graphql-tools')
const schema = makeExecutableSchema({typeDefs, resolvers});

generateGraphQlSDLFile(schema, 'schema.graphql')
