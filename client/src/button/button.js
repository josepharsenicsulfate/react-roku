import './button.css'

function Button(props){
    return(
        <div>
            <button className="button" onClick={ () => props.func}>{props.value}</button>
        </div>
    )
}

export default Button