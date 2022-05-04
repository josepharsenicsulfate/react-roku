const { gql } = require('apollo-server')
const typeDefs = gql`
    type Champion{
        id: String
        skins: [Skin]
        key: Int
        name: String
        title: String
        image: Image
        tags: [String]
        lore: String
        spellset: [Spell]
        passive: Passive
    }

    type Image{
        full: String
    }

    type Skin{
        id: Int
        num: Int
        name: String
    }

    type Spell{
        name: String
        description: String
        image: Image
    }

    type Passive{
        name: String
        description: String
        image: Image
    }

    type Query{
        getChampions: [Champion]
        getChampion(id: String!): Champion
        getChampionTest(key: Int!): Champion
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