import './info.css'

function Info({props}){
    return(
        <div className='info'>
            <img src={props.splash} alt='' />
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            <p className='bio'>{props.bio}</p>
            <p className='abilities'>{props.abilities}</p>
        </div>
    )

}

export default Info