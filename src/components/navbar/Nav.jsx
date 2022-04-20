import React from 'react';
import { Link } from "react-router-dom";
import Account from '../account/Account';
import styles from "./Nav.module.css";



const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/" className={styles.brand}>

                        <h3>Learn Web Development</h3>
                    </Link>
                </li>
            </ul>
            <Account />

        </nav>
    )
}

export default Nav;
//  <span class="material-icons-outlined" title="Logout"> logout </span>
