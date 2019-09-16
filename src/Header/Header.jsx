import React from 'react'
import style from './Header.module.css'
import logo from './logo.jpg';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
           <NavLink to={"/content"}><img src={logo} alt="logo"/></NavLink>
        </header>
    )
};

export default Header;