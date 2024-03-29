import React from 'react';
import './App.css';
import Header from "./Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";

function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <div className={"wrapper"}>
                <NavBar/>
                <Route path={"/profile"} render={() => <Profile state={props.state} addPost={props.addPost}/>}/>
                <Route path={"/messages"} render={() => <Messages state={props.state.messagePage}/>}/>
                <Route path={"/content"} component={Content}/>
            </div>
        </BrowserRouter>

    );
}

export default App;
