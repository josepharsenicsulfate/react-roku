import { InMemoryCache } from "@apollo/client"

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                getChampions: {
                    keyArgs: false,
                    merge(existing, incoming) {
                        let getChampions = []
                        if(existing && existing.getChampions) {
                            getChampions = getChampions.concat(existing.getChampions)
                        }
                        if(incoming && incoming.getChampions) {
                            getChampions = getChampions.concat(incoming.getChampions)
                        }
                        return{
                            ...incoming,
                            getChampions
                        }
                    }
                },
                getChampion: {
                    keyArgs: true,
                    merge(existing, incoming) {
                        let getChampion = []
                        if(existing && existing.getChampion) {
                            getChampion = getChampion.concat(existing.getChampion)
                        }
                        if(incoming && incoming.getChampion) {
                            getChampion = getChampion.concat(incoming.getChampion)
                        }
                        return{
                            ...incoming,
                            getChampion
                        }
                    }
                }
                ,
                getChampionTest: {
                    keyArgs: true,
                    merge(existing, incoming) {
                        let getChampionTest = []
                        if(existing && existing.getChampionTest) {
                            getChampionTest = getChampionTest.concat(existing.getChampionTest)
                        }
                        if(incoming && incoming.getChampionTest) {
                            getChampionTest = getChampionTest.concat(incoming.getChampionTest)
                        }
                        return{
                            ...incoming,
                            getChampionTest
                        }
                    }
                }
            }
        }
    }
})