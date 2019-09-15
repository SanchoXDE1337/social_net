import React from 'react'
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <header className={style.navbar}>
            <div className={style.item}>
                <NavLink to={"/profile"} activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/messages"} activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/main"} activeClassName={style.activeLink}>News</NavLink>
            </div>
        </header>
    )
};

export default NavBar;