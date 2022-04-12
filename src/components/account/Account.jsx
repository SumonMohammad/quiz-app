import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Account.module.css";


const Account = () => {
    return (
        <div className={styles.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>

        </div>
    )
}

export default Account