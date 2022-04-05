import Grid from "../grid/grid"
import Content from "../content/content"
import './container.css'

function Container(){
    return(
        <div className="container">
            <Grid name=""/>
            <Content />
        </div>
    )
}

export default Container