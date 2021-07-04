import React from 'react';
import {Routes} from "./Route/Routes";
import {Header} from "./header/Header";
import style from "./App.module.css"
import {Footer} from "./footer/Footer";


function App() {
    return (<>
        <Header />
            <div className={style.wrapper}>
                <Routes/>
            </div>
        <Footer />
    </>);
}




export default App;
