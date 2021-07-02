import {Link, useParams } from "react-router-dom"
import {gql, useQuery} from "@apollo/client";

const characterRes = gql`
    query currentCharacter($id: ID!) {
        character(id: $id) {
            name
            status
            species
            type
            gender
            image
        }
    }        `
type CharacterType = {
    character: {
        name: string
        gender: string
        species: string
        status: string
        image: string
        type: string
    }
}
type VarType = {
    id: string
}
export const DetailedCharacter = () => {

    const { id }: {id: string} = useParams()

    const {data, loading, error} = useQuery<CharacterType, VarType>(characterRes, {
        variables: {id}
    })

    if(loading) return <div>load</div>

    return (
        <>
            <div>{data?.character.name}</div>
            <img src={data?.character.image}/>
            <div>{data?.character.status}</div>
            <Link to={'/'}>Main</Link>
        </>
    )
}