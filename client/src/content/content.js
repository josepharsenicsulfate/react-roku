import Grid from '../grid/grid'
import Container from '../container/container'
import SearchBar from '../search-bar/search-bar'
import Button from '../button/button'

import './content.css'

const BASE_URL = 'http://ddragon.leagueoflegends.com/cdn/12.6.1/img/champion/'

const MASTER_URL = 'https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json'

fetch(MASTER_URL)
.then(res => res.json())
.then(res => {
    console.log()
})

let list = [
    BASE_URL+'Vi.png',
    BASE_URL+'Blitzcrank.png',
    BASE_URL+'Jayce.png',
    BASE_URL+'Jinx.png',
    BASE_URL+'Ekko.png'
]

function Content(){
    return(
        <div className="content">
            <Grid list={list} />
            <Container children={
                [
                    <SearchBar value='Search'/>,
                    <Button value='Add'/>,
                    <Button value='Update'/>,
                    <Button value='Delete'/>
                ]
            }/>
            
        </div>
    )
}

export default Content
