import Grid from '../grid/grid'
import Container from '../container/container'
import Info from '../info/info'
import SearchBar from '../search-bar/search-bar'
import Button from '../button/button'

import { gql, useQuery } from '@apollo/client'

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
    const {data, loading, error} = useQuery(GET_SPEC_CHAMP, { 
        variables: { getChampionId: 'Fizz' }
    })

    if(loading) return 'Loading...'
    if(error) return `Error ${error.message}`

    return(
        <div className="content">
            <Grid />
            <Container children={
                [
                    <SearchBar key='1' value='Search' />,
                    <Button key='2' value='Add' />,
                    <Button key='3' value='Update' />,
                    <Button key='4' value='Delete' />,
                    <Info key='5' props={data.getChampion} />
                ]
            } />
        </div>
    )
}

export default Content
