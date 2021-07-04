import {gql} from "@apollo/client";


export const queryQL = {
    characters: gql`
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
    }`,
    detailCharacter: gql`
    query currentCharacter($id: ID!) {
        character(id: $id) {
            name
            status
            species
            type
            gender
            image
        }
    }`,
}


export type CharactersType = {
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

export type CharactersVarType = {
    page: number
}

export type CharacterType = {
    character: {
        name: string
        gender: string
        species: string
        status: string
        image: string
        type: string
    }
}
export type CharacterVarType = {
    id: string
}