const { RESTDataSource } = require('apollo-datasource-rest')

class LeagueAPI extends RESTDataSource {
    constructor(){
        super()
        this.baseURL = 'http://ddragon.leagueoflegends.com/cdn'
    }

    async getChampions(){
        let res = await this.get('/12.6.1/data/en_US/champion.json')
        res = Object.values(res.data)
        return Array.isArray(res)
        ? res.map(champ => this.resFilter(champ)) : []
    }

    resFilter(champion){
        return{
            id: champion.id || 0,
            name: champion.name,
            title: champion.title,
            image: champion.image,
            tags: champion.tags
        }
    }

    async getChampionById({championId}){
        const response = await this.get('/12.6.1/data/en_US/champion.json', { id: championId})
        return this.resFilter(response[0])
    }

    getChampionsByIds({championIds}){
        return Promise.all(
            championIds.map(championId => this.getChampionById({championId}))
        )
    }
}

module.exports = LeagueAPI