const { gql } = require('apollo-server')
const typeDefs = gql`
    type Champion{
        id: String
        name: String
        title: String
        image: Image
        tags: [String]
    }

    type Image{
        full: String
        sprite: String
    }
    type Query{
        getChampions: [Champion]
        getChampion(id: String!): Champion
    }

    type Mutation{
        addChampion(id: String!): MasterListUpdate
        updateChampion(id: String!): MasterListUpdate
        deleteChampion(id: String!): MasterListUpdate
    }

    type MasterListUpdate{
        success: Boolean!
        message: String
    }
`

module.exports = typeDefs