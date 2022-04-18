import './info.css'

function Info({props}){
    let src = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+props.id+'_0.jpg'
    let passive = 'http://ddragon.leagueoflegends.com/cdn/12.7.1/img/passive/'+props.id+'.png'
    let spell = 'https://ddragon.leagueoflegends.com/cdn/12.7.1/img/spell/'+props.id+'.png'

    let list = []

    props.spellset.map((data) => {
        list.push(data.name)
    })

    console.log(list)
    
    return(
        <div className='info'>
            <img src={src} alt='' />
            <h1>{props.name}</h1>
            <h3>{props.title}</h3>
            <p className='tags'>{props.tags}</p>
            <ul>
                <li>Passive</li>
                <li>{list[0]}</li>
                <li>{list[1]}</li>
                <li>{list[2]}</li>
                <li>{list[3]}</li>
            </ul>
            <p className='bio'>{props.lore}</p>
            
        </div>
    )
}

export default Info