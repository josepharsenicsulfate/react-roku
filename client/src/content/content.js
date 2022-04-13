import Grid from '../grid/grid'
import Container from '../container/container'
import Info from '../info/info'
import SearchBar from '../search-bar/search-bar'
import Button from '../button/button'

import { gql, useQuery } from '@apollo/client'

import './content.css'

const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn'

const DATA_URL = BASE_URL+'/12.6.1/data/en_US/champion.json'

const IMG_SQUARE = '/12.6.1/img/champion/'

const SPLASH_URL = BASE_URL+'/img/champion/splash/'

// fetch(DATA_URL)
// .then(res => res.json())
// .then(res => {
//     // const deets = Object.values(res.data)
//     // console.log(deets)
//     // console.log(deets[70].id)
//     // console.log(deets[70].name)
//     // console.log(deets[70].title)
//     // console.log(deets[70].image)
//     // console.log(deets[70].tags)
// })

let list = [
    BASE_URL+IMG_SQUARE+'Vi.png',
    BASE_URL+IMG_SQUARE+'Blitzcrank.png',
    BASE_URL+IMG_SQUARE+'Jayce.png',
    BASE_URL+IMG_SQUARE+'Jinx.png',
    BASE_URL+IMG_SQUARE+'Ekko.png',
    BASE_URL+IMG_SQUARE+'Viktor.png',
    BASE_URL+IMG_SQUARE+'Zeri.png',
    BASE_URL+IMG_SQUARE+'Warwick.png',
    BASE_URL+IMG_SQUARE+'DrMundo.png',
    BASE_URL+IMG_SQUARE+'Caitlyn.png',
    BASE_URL+IMG_SQUARE+'Renata.png',
    BASE_URL+IMG_SQUARE+'Zac.png',
    BASE_URL+IMG_SQUARE+'Heimerdinger.png'
]

export const GET_CHAMPS = gql`
    query GetChampions {
        getChampions {
            id
            title
            name
            tags
        }
    } 
`

export const GET_SPEC_CHAMP = gql`
    query GetChampions($getChampionId: String!) {
        getChampion(id: $getChampionId) {
            id
            name
            title
            tags
            lore
            spellset {
              name
              description
            }
            passive {
              name
              description
            }
        }
    }
`

function Content(){
    // const {data, loading, error} = useQuery(GET_CHAMPS)

    // const id = 'Aatrox'
    const {data, loading, error} = useQuery(GET_SPEC_CHAMP, { 
        variables: "Aatrox"
    })

    console.log(data)

    if(loading) return 'Loading...'
    if(error) return `Error ${error.message}`

    return(
        <div className="content">
            <Grid list={list} />
            <Container children={
                [
                    <SearchBar key='1' value='Search' />,
                    <Button key='2' value='Add' />,
                    <Button key='3' value='Update' />,
                    <Button key='4' value='Delete' />,
                    <Info key='5' props={data} />
                ]
            } />
        </div>
    )
}

export default Content
