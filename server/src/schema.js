const { gql } = require('apollo-server')
const typeDefs = gql`
    type Champion{
        id: ID
        name: String
        title: String
        image: Image
        tags: String
    }

    type Image{
        full: String
        sprite: String
    }

    type Query{
        getChampions: [Champion]
        getChampion(id: ID!): Champion
    }

    type Mutation{
        addChampion(id: ID!): MasterListUpdate
        updateChampion(id: ID!): MasterListUpdate
        deleteChampion(id: ID!): MasterListUpdate
    }

    type MasterListUpdate{
        success: Boolean!
        message: String
    }
`

module.exports = typeDefs