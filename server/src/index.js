const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const LeagueAPI = require('./datasources/league')
const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        leagueAPI: new LeagueAPI(),
    }) 
})

server.listen().then(() => {
    console.log(`Server is running! Listening on port 4000`)
})