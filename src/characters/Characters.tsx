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
                name
                id
                status
                species
            }
        }
    }            `

export const Characters = () => {

    const [page, setPage] = useState(1)

    const {data, loading, error, previousData} = useQuery(charactersQuery, {
        variables: {page}
    })
    console.log(previousData, "pevdata")
    console.log(data, "currentdata")
    return (
        <div>
            <Character />
            <div style={{border: "1px solid"}}> All characters
            {
                data ? <div>{data.characters.info.next}</div> : null
            }
            <button onClick={() => setPage(page + 1)}>Next</button><br/>
            <span>Current: {page}</span><br/>
            {
                data && data.characters.info.prev
                    ? <button onClick={() => setPage(page - 1)}>prev</button>
                    : null
            }
            </div>
        </div>
    )
}