import { Link, useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
import {CharacterType, CharacterVarType, queryQL } from "../../../dal/graphql";


export const DetailedCharacter = () => {

    const { id }: {id: string} = useParams()

    const {data, loading, error} = useQuery<CharacterType, CharacterVarType>(queryQL.detailCharacter, {
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