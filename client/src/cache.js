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
                }
            }
        }
    }
})