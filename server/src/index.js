require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const LeagueAPI = require('./datasources/league')

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        leagueAPI: new LeagueAPI()
    }) 
})

server.listen({ port: process.env.PORT || 4000 }).then(() => {
    console.log(`Server is running!`)
})