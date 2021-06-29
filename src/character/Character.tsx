import React, {useEffect, useState} from "react";
import {gql, useQuery} from "@apollo/client";

type CharacterType = {
    character: {
        name: string
        id: string
        status: string
        species: string
        type: string
        gender: string
        origin: Object
        location: Object
        image: string
        episode: Array<any>
        created: string
    }
}

type IdVarsType = {
    ID: number
}

const queryCharacter = gql`
    query randomChar($ID: ID!) {
        character(id: $ID) { 
                name
                id
                status
                species
                type
                gender
                origin {
                    id
                }
                location {
                    id
                }
                image
                episode {
                    id
                }    
                created
            } 
        }`

export const Character = () => {

    const [randomId, setRandom] = useState<number>(0)

    function randomInteger(min = 1, max = 671) {
        let rand = min + Math.random() * (max + 1 - min);
        return (Math.floor(rand));
    }

    useEffect(() => {
        setRandom(randomInteger())
    }, [])

        const {data, loading, error} = useQuery<CharacterType, IdVarsType>(queryCharacter, {
            variables: {ID: randomId},
        });

    if(loading) return <div>Loading</div>
    if(error) return <div>{error.message}</div>
    return (
        <div>
            {
                data
                    ?<><h2>{data.character.status}</h2>
                        <img src={data.character.image}/>
                        <div>{data.character.name}</div>
                        <div>{data.character.gender}</div>
                        {data.character.episode.map((el,id) => <span key={id}>{el.id}<br/></span>)}
                    </>

                    : null
            }
        </div>
    )
}