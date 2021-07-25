import {useQuery} from "@apollo/client";
import React, {useState} from "react";
import {Character} from "./character/Character";
import {CharactersType, CharactersVarType, queryQL} from "../dal/graphql";
import style from "./Characters.module.css"


export const Characters = () => {

    const [page, setPage] = useState(1)

    const {data, loading} = useQuery<CharactersType, CharactersVarType>(queryQL.characters, {
        variables: {page}
    })

    const nextPage = () => {
        setPage(page + 1)
    }
    const prevPage = () => {
        setPage(page - 1)
    }

    if(loading) return <div>Loading</div>

    const characters = data ? [...data.characters.results] : null;

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

