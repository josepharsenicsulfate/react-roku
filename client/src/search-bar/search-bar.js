import Button from '../button/button'
import './search-bar.css'

import { useState } from 'react'

function SearchBar(props){
    let [ input, setInput ] = useState('')
    let inputListener = (event) => {
        setInput(filter(event.target.value))
    }

    return(
        <div className='search-bar-container'>
            <input className='search-bar' type='text' placeholder='Search...' onChange={inputListener} />
            <Button func={props.setChamp} input={input} placeholder='Search' />
        </div>
    )
}

function filter(input){
    let pattern = /[A-z]/g
    let NOT_NULL = input.match(pattern) 
        ? input.match(pattern).join('').toLowerCase() 
        : ''

    let spec_case = [
        'aurelionsol',
        'drmundo',
        'jarvaniv',
        'kogmaw',
        'leesin',
        'masteryi',
        'missfortune',
        'monkeyking',
        'reksai',
        'renata',
        'tahmkench',
        'twistedfate',
        'xinzhao'  
    ]

    let ret_spec_case = [
        'AurelionSol',
        'DrMundo',
        'JarvanIV',
        'KogMaw',
        'LeeSin',
        'MasterYi',
        'MissFortune',
        'MonkeyKing',
        'RekSai',
        'Renata',
        'TahmKench',
        'TwistedFate',
        'XinZhao'  
    ]

    let chk_spec = spec_case.includes(NOT_NULL) 
        ? ret_spec_case[spec_case.indexOf(NOT_NULL,0)] 
        : capitalize(NOT_NULL)

    return chk_spec
}

function capitalize(input){
    let first = input.charAt(0).toUpperCase()
    let rest = input.substring(1,input.length+1)

    return first+rest
}

export default SearchBar