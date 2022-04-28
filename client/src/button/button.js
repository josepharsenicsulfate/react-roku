import './button.css'

function Button(props){
    return(
        <div>
            <button className="button" onClick={ () => props.func}>{props.value}</button>
            {/* <button className="button" onClick={test}>{props.value}</button> */}
        </div>
    )
}

export default Button