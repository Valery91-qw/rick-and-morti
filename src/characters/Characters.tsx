import {gql, useQuery} from "@apollo/client";
import React, {useState} from "react";
import {Character} from "./character/Character";

const charactersQuery = gql`
    query nextPage($page: Int!){
        characters(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                image
            }
        }
    }            `

type CharactersType = {
    characters: {
        info: {
            count: number
            pages: number
            next: number
            prev: number
        }
        results: Array <{
            id: number
            name: string
            status: string
            image: string
        }>
    }
}

type VarCharactersType = {
    page: number
}

export const Characters = () => {

    const [page, setPage] = useState(1)

    const {data, loading, error, previousData} = useQuery<CharactersType, VarCharactersType>(charactersQuery, {
        variables: {page}
    })

    if(loading) return <div>Loading</div>

    const characters = data ? [...data.characters.results] : null;

    return (<>
        <div>
            {
                characters ? characters.map((el, i) => <Character character={el} key={i} />) : null
            }
        </div>
    </>)
}

