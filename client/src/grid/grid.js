import './grid.css'

import { gql, useQuery } from '@apollo/client'

const IMG_URL = 'http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/'

export const GET_CHAMPS = gql`
    query GetChampions {
        getChampions {
            id
            key
            image{
                full
            }
        }
    } 
`

function Grid(props){
    const {data, loading, error} = useQuery(GET_CHAMPS)

    if(loading) return 'Loading...'
    if(error) return `Error ${error.message}`

    const gridListener = (event) => {
        if(event.target.name === "grid-item"){
            props.setChamp(event.target.alt)
        }
    }

    return(
        <div className='grid'>
            { data.getChampions.map((data) => {
                return(
                    <img name="grid-item" key={data.key} src={IMG_URL+data.image.full} alt={data.id} onClick={(event)=>gridListener(event)} />
                )
            })}
        </div> 
    )
}

export default Grid