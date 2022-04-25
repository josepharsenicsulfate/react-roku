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
                <li key={'li-p'}>
                    <img key='img-p' src={passive+props.passive.image.full} alt='passive-p' />
                    <p key='desc-p'>{props.passive.name}</p>
                </li>

                { props.spellset.map((data, index) => {
                    return(
                        <li key={'li'+index}>
                            <img key={'img'+index} src={spell+data.image.full} alt={'spell'+index} />
                            <p key={'desc'+index}>{data.name}</p>
                        </li>
                    )
                })}
            </ul>
            <p className='bio'>{props.lore}</p>
            
        </div>
    )
}

export default Info