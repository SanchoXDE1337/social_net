import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className={"wrapper"}>
                <NavBar/>
                <Content/>
            </div>
        </BrowserRouter>

    );
}

export default App;
