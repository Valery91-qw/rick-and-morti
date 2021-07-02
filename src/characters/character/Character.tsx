import { Link } from "react-router-dom"
import style from "./Character.module.css"

type CharacterType = {
    character: {
        id: number
        name: string
        status: string
        image: string
    }
}

export const Character = (props: CharacterType) => {

    return(
        <div>
            <img className={style.img} src={props.character.image}/>
            <span>{props.character.name}</span>
            <div>{props.character.status}</div>
            <Link to={`/detailedCharacter/${props.character.id}`}>Detail</Link>
        </div>
    )
}