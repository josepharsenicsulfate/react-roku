import './grid.css'

import { gql, useQuery } from '@apollo/client'

const IMG_URL = 'http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/'

export const GET_CHAMPS = gql`
    query GetChampions {
        getChampions {
            image{
                full
            }
        }
    } 
`

function Grid(){

    const {data, loading, error} = useQuery(GET_CHAMPS)

    if(loading) return 'Loading...'
    if(error) return `Error ${error.message}`

    return(
        <div className='grid'>
            { data.getChampions.map((data, index) => {
                return(
                    <img key={index} src={IMG_URL+data.image.full} alt={data.image.full} />
                )
            })}
        </div> 
    )
}

export default Grid