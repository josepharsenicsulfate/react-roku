import Grid from '../grid/grid'
import Container from '../container/container'
import Info from '../info/info'
import SearchBar from '../search-bar/search-bar'

import { gql, useQuery } from '@apollo/client'
import { useState } from 'react'

import './content.css'


export const GET_SPEC_CHAMP = gql`
    query GetChampion($getChampionId: String!) {
        getChampion(id: $getChampionId) {
            id
            name
            title
            tags
            lore
            spellset {
              name
              description
              image {
                  full
                }
            }
            passive {
              name
              description
              image {
                    full
                }
            }
        }
    }
`

function Content(){
    let [ champ, setChamp ] = useState('')
    
    const {data, loading, error} = useQuery(GET_SPEC_CHAMP, { 
        variables: { getChampionId: champ || 'Aatrox' }
    })

    if(loading) return 'Loading...'
    if(error) return `Error ${error.message}`

    return(
        <div className="content">
            <Grid setChamp={ setChamp } />

            <Container children={
                [
                    <SearchBar key='1' setChamp={ setChamp } />,
                    // <Button key='2' placeholder='Add' />,
                    // <Button key='3' placeholder='Update' />,
                    // <Button key='4' placeholder='Delete' />,
                    <Info key='5' props={data.getChampion}/>
                ]
            } />
        </div>
    )
}

export default Content