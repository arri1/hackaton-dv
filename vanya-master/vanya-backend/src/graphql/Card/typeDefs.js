const { default: gql } = require('graphql-tag')

const Card = gql`
    scalar Upload

    type Card {
        id: String
        title: String
        color: String
        icon: File
    }

    type File {
        id: String
        path: String
    }

    input CardInput {
        title: String!
        color: String
    }

    type Query {
        cards: [Card!]!
    }

    type Mutation {
        createCard( file: Upload!, data: CardInput! ): Card!
    }
`

module.exports = {
    Card
}
