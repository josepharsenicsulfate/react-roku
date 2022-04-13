import './info.css'

function Info({props}){
    let src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+props.id+'_0.jpg'
    
    return(
        <div className='info'>
            <img src={src} alt='' />
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            {/* <p className='bio'>{props.bio}</p> */}
            {/* <p className='abilities'>{props.abilities}</p> */}
            <p className='tags'>{props.tags}</p>
        </div>
    )
}

export default Info