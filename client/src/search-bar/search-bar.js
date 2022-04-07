import './search-bar.css'

function SearchBar(props){
    const item = props.value
    return(
        <div className='search-bar-container'>
            <input className='search-bar' type='text' placeholder={item} />
        </div>
    )
}

export default SearchBar