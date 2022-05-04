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
            skins: champion.skins,
            key: champion.key,
            name: champion.name,
            title: champion.title,
            image: champion.image,
            tags: champion.tags,
            lore: champion.lore,
            spellset: champion.spells,
            passive: champion.passive
        }
    }

    async getChampionById({championId}){
        const response = await this.get('/12.6.1/data/en_US/champion/'+championId+'.json')
        const champ = Object.values(response.data)
        return this.resFilter(champ[0])
    }

    async getChampionByIdTest({championKey}){
        const response = await this.get('/12.6.1/data/en_US/champion.json')
        const champ = Object.values(response.data)
        const spec_champ = (championKey) => {
            champ.forEach(res => {
                if(res.key == championKey){
                    return res.id
                }
            });
        }
        return this.resFilter(spec_champ(championKey))
    }

    // getChampionsByIds({championIds}){
    //     return Promise.all(
    //         championIds.map(championId => this.getChampionById({championId}))
    //     )
    // }
}

module.exports = LeagueAPI