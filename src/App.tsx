import React, {useEffect, useState} from 'react';
import {Header} from "./header/Header";
import style from "./App.module.css"
import {Footer} from "./footer/Footer";
import {Redirect, Route, Switch} from "react-router-dom";
import {Characters} from "./characters/Characters";
import {DetailedCharacter} from "./characters/character/DetailedCharacter/DetailedCharacter";
import {useQuery} from "@apollo/client";
import {CharactersType, CharactersVarType, queryQL} from "./dal/graphql";


function App() {

    const [currentPage, setCurrentPage] = useState(1)

    const {data, loading} = useQuery<CharactersType, CharactersVarType>(queryQL.characters, {
        variables: {page: currentPage}
    })


    return (<>
        <Header />
            <div className={style.wrapper}>
                <Switch>
                    <Route path={`/${currentPage}`}
                                 render={() => <Characters currentPage={currentPage}
                                                           loading={loading}
                                                           data={data}
                                                           setCurrentPage={setCurrentPage}/>}/>
                    <Route path={'/detailedCharacter/:id'} render={() => <DetailedCharacter />}/>
                    <Redirect exact from='/' to={`/${currentPage}`} />
                </Switch>
            </div>
        <Footer />
    </>);
}




export default App;
