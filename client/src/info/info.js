import './info.css'

function Info({props}){
    let src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+props.id+'_0.jpg'
    let passive = 'http://ddragon.leagueoflegends.com/cdn/12.7.1/img/passive/'
    let spell = 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/'
    
    return(
        <div className='info'>
            <img src={src} alt='' />
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            <p className='tags'>{props.tags}</p>
            <ul>
                <li><img src={passive+props.passive.image.full} alt='passive' /></li>
                <li><img src={spell+props.spellset[0].image.full} alt='spell' /></li>
                <li><img src={spell+props.spellset[1].image.full} alt='spell' /></li>
                <li><img src={spell+props.spellset[2].image.full} alt='spell' /></li>
                <li><img src={spell+props.spellset[3].image.full} alt='spell' /></li>
            </ul>
            <p className='bio'>{props.lore}</p>
            
        </div>
    )
}

export default Info