import './info.css'

import { gql, useQuery } from '@apollo/client'

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

function Info(props){
    const {data, loading, error} = useQuery(GET_SPEC_CHAMP, { 
        variables: { getChampionId: props.champ || 'Aatrox' }
    })

    if(loading) return 'Loading...'
    if(error) return `Error ${error.message}`

    let src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+data.getChampion.id+'_0.jpg'
    let passive = 'http://ddragon.leagueoflegends.com/cdn/12.7.1/img/passive/'
    let spell = 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/'
    
    return(
        <div className='info'>
            <img src={src} alt='' />
            <h1>{data.getChampion.name}</h1>
            <h3>{data.getChampion.title}</h3>
            <p className='tags'>{data.getChampion.tags}</p>
            <ul>
                <li key={'li-p'}>
                    <img key='img-p' src={passive+data.getChampion.passive.image.full} alt='passive-p' />
                    <p key='desc-p'>{data.getChampion.passive.name}</p>
                </li>

                { data.getChampion.spellset.map((data, index) => {
                    return(
                        <li key={'li'+index}>
                            <img key={'img'+index} src={spell+data.image.full} alt={'spell'+index} />
                            <p key={'desc'+index}>{data.name}</p>
                        </li>
                    )
                })}
            </ul>
            <p className='bio'>{data.getChampion.lore}</p>
            
        </div>
    )
}

export default Info