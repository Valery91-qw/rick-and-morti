import React from "react";
import {Character} from "./character/Character";
import {CharactersType } from "../dal/graphql";
import style from "./Characters.module.css"


type CharactersPropsType = {
    currentPage: number
    setCurrentPage: (page: number) => void
    loading: boolean
    data: CharactersType | undefined
}

export const Characters = ({currentPage, setCurrentPage, loading, data} : CharactersPropsType) => {

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const characters = data ? [...data.characters.results] : null;

    if(loading) return <div>Loading</div>

    return (
        <div className={style.wrapper}>
            {data?.characters.info.prev && <button onClick={prevPage}  className={style.buttonPrev}>Previous</button> }
            {
                characters && characters.map((el, i) => <Character character={el} key={i} />)
            }
            {data?.characters.info.next && <button onClick={nextPage} className={style.buttonNext}>Next</button>}
        </div>
    )
}

