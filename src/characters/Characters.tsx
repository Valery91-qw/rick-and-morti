import {Character} from "../character/Character";
import {gql, useQuery} from "@apollo/client";
import {useState} from "react";

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

    const maxPage = data?.characters.info.pages || 0

    return (
        // <div>
        //     {/*<Character />*/}
        //     <div style={{border: "1px solid"}}> All characters
        //     {
        //         data ? <div>{data.characters.info.next}</div> : null
        //     }
        //     { page < maxPage && page !== 0
        //         ? <><button onClick={() => setPage(page + 1)}>Next</button><br/></>
        //         : null }
        //     <span>Current: {page}</span><br/>
        //     {
        //         data && page > 1 && data.characters.info.prev
        //             ? <button onClick={() => setPage(page - 1)}>prev</button>
        //             : null
        //     }
        //     </div>
        // </div>
        <div>
            {
                data ? data.characters.results.map(el => <span>{el.name}</span>) : null
            }
        </div>
    )
}