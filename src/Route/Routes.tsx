import {Route, Switch } from "react-router-dom"
import {Characters} from "../characters/Characters";

export const PATH = {

}


export const Routes = () => {
    return (<>
        <Switch>
            <Route exact path={'/'} render={() => <Characters />}/>
        </Switch>
    </>)
}