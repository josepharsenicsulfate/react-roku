import Grid from '../grid/grid'
import Container from '../container/container'
import Info from '../info/info'
import SearchBar from '../search-bar/search-bar'
// import Button from '../button/button'

import './content.css'
import { useState } from 'react'

function Content(){
    let [ champ, setChamp ] = useState('')

    return(
        <div className="content bg-dark text-light">
            <Grid setChamp={ setChamp } />
            <Container children={[
                <SearchBar key='1' setChamp={ setChamp } />,
                // <Button key='2' placeholder='Add' />,
                // <Button key='3' placeholder='Update' />,
                // <Button key='4' placeholder='Delete' />,
                <Info key='2' champ={champ} />
            ]} />
        </div>
    )
}

export default Content