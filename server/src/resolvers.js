module.exports = {
    Query: {
        getChampions: (_, __, { dataSources }) =>
            dataSources.leagueAPI.getChampions(),
        getChampion: (_, { id }, { dataSources }) =>
            dataSources.leagueAPI.getChampionById({ championId: id}),
        getChampionTest: (_, { key }, { dataSources }) =>
            dataSources.leagueAPI.getChampionByIdTest({ championKey: key})
    }
}