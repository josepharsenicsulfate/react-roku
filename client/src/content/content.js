import Grid from '../grid/grid'
import Container from '../container/container'
import Info from '../info/info'
import SearchBar from '../search-bar/search-bar'
import Button from '../button/button'

import './content.css'

const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn'

const DATA_URL = BASE_URL+'/12.6.1/data/en_US/champion.json'

const IMG_SQUARE = '/12.6.1/img/champion/'

const SPLASH_URL = BASE_URL+'/img/champion/splash/'

fetch(DATA_URL)
.then(res => res.json())
.then(res => {
    const deets = Object.values(res.data)
    console.log(deets)
    console.log(deets[70].id)
    console.log(deets[70].name)
    console.log(deets[70].title)
    console.log(deets[70].image)
    console.log(deets[70].tags)
})

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
    BASE_URL+IMG_SQUARE+'Heimerdinger.png',
]

let info = {
    splash: SPLASH_URL+'Ekko_0.jpg',
    name: 'Ekko',
    title: 'the Boy Who Shattered Time',
    bio: "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this freedom, when there's a threat to his friends he'll do anything to defend them. To outsiders, Ekko seems to achieve the impossible the first time, every time.",
    abilities: ['Time Winder', 'Parallel Convergence', 'Phase Dive', 'Chronobreak']
}

function Content(){
    return(
        <div className="content">
            <Grid list={list} />
            <Container children={
                [
                    <SearchBar value='Search'/>,
                    <Button value='Add'/>,
                    <Button value='Update'/>,
                    <Button value='Delete'/>,
                    <Info props={info}/>
                ]
            }/>
        </div>
    )
}

export default Content
