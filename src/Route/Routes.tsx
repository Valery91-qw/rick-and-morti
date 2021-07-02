import {Route, Switch } from "react-router-dom"
import {Characters} from "../characters/Characters";
import {DetailedCharacter} from "../characters/character/DetailedCharacter/DetailedCharacter";

export const PATH = {

}


export const Routes = () => {
    return (<>
        <Switch>
            <Route exact path={'/'} render={() => <Characters />}/>
            <Route path={'/detailedCharacter/:id'} render={() => <DetailedCharacter />}/>
        </Switch>
    </>)
}