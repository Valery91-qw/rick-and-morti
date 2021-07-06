import { NavLink } from "react-router-dom"
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
        <div className={style.wrapper}>
            <img className={style.img} src={props.character.image} alt="error"/>
            <div>{props.character.name}</div>
            <div>{props.character.status}</div>
            <NavLink
                className={style.link}
                to={`/detailedCharacter/${props.character.id}`}>Details</NavLink>
        </div>
    )
}