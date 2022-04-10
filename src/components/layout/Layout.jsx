import React, { Fragment } from 'react';
import Nav from '../navbar/Nav';
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Nav />
            <main className={styles.main}>
                <div className={styles.container}>
                    {children}
                </div>

            </main>
        </Fragment >

    )
}

export default Layout