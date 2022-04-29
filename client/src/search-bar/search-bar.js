import Button from '../button/button'
import './search-bar.css'

import { useState } from 'react'

function SearchBar(props){

    let [ input, setInput ] = useState('')
    let inputListener = (event) => {
        setInput(event.target.value)
    }

    return(
        <div className='search-bar-container'>
            <input className='search-bar' type='text' placeholder='Search...' onChange={inputListener}/>
            <Button func={props.setChamp} input={input} placeholder='Search' />
        </div>
    )
}

export default SearchBar