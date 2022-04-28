// import Button from '../button/button'
import './search-bar.css'

function SearchBar(props){
    // let input = ''

    // function takeInput(){
    //     input = document.getElementById('search').value
    //     console.log(input)
    //     return input
    // }
    // let input = '' || document.getElementById('search').value

    // function test(){
    //     fromChild = document.getElementById('search').value
    //     console.log(fromChild)

    //     this.setState((state) => {
    //         return { fromChild: "" }
    //     })
    // }

    // const fromChild = 'Fizz'

    return(
        <div className='search-bar-container'>
            <input id='search' className='search-bar' type='text' placeholder={props.value} />
            {/* <Button func={props.childToParent(fromChild)} value='Search' /> */}
            {/* <Button value='Search' func={test}/> */}
            {/* <Button value='Search' func={props.setChamp(takeInput)}/> */}
        </div>
    )
}

export default SearchBar