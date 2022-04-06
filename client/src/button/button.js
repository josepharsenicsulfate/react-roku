import './button.css'

function Button(props){
    return(
        <div>
            <button key={props.value} className="button">{props.value}</button>
        </div>
    )
}

export default Button