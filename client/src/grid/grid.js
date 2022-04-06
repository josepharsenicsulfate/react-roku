import './grid.css'

function Grid(props){
    return(
        <div className='grid'>
            { props.list.map((data) => (
                <img key={data} src={data} alt={data}/>
            ))}
        </div>
    )
}

export default Grid