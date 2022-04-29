import './button.css'

function Button(props){
    return(
        <div>
            <button className="button" onClick={() => props.func(props.input)}>{props.placeholder}</button>
        </div>
    )
}

export default Button