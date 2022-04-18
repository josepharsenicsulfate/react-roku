module.exports = {
    Query: {
        getChampions: (_, __, { dataSources }) =>
            dataSources.leagueAPI.getChampions(),
        getChampion: (_, { id }, { dataSources }) =>
            dataSources.leagueAPI.getChampionById({ championId: id})
    }
}