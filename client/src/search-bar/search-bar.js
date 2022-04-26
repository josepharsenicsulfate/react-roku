import Button from '../button/button'
import './search-bar.css'

function SearchBar(props){
    let fromChild = 'Fizz' || document.getElementById('search').value
    // const fromChild = 'Fizz'
    console.log(fromChild)
    return(
        <div className='search-bar-container'>
            <input id='search' className='search-bar' type='text' placeholder={props.value} />
            <Button func={props.childToParent(fromChild)} value='Search' />
        </div>
    )
}

export default SearchBar