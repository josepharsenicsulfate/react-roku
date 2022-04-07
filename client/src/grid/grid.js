import './grid.css'

function Grid(props){
    const mappedSrc = props.list.map((data, index) =>{
        return(
            <img key={index} src={data} alt={data}/>
        )
    })
    return(
        <div className='grid'>
            { mappedSrc }
        </div>
    )
}

export default Grid