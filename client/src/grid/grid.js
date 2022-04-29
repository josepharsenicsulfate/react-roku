import './grid.css'

import { gql, useQuery } from '@apollo/client'

const IMG_URL = 'http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/'

export const GET_CHAMPS = gql`
    query GetChampions {
        getChampions {
            id
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

    // window.addEventListener('click', (e) =>{
    //     if(e.target.name == "grid-item"){
    //         console.log(e)
    //         console.log(e.target)
    //         props.setChamp(e.target.alt)
    //     }
    // })

    const gridListener = (event) => {
        if(event.target.name === "grid-item"){
            props.setChamp(event.target.alt)
        }
    }

    return(
        <div className='grid'>
            { data.getChampions.map((data) => {
                return(
                    <img name="grid-item" key={data.id} src={IMG_URL+data.image.full} alt={data.id} onClick={(event)=>gridListener(event)} />
                )
            })}
        </div> 
    )
}

export default Grid