import './search-bar.css'

function SearchBar(props){
    return(
        <div className='search-bar-container'>
            <input key={props.value} className='search-bar' type='text' placeholder={props.value} />
        </div>
        
    )
}

export default SearchBar