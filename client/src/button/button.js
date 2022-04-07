import './button.css'

function Button(props){
    return(
        <div>
            <button className="button">{props.value}</button>
        </div>
    )
}

export default Button