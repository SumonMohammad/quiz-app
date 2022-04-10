import React from 'react';
import styles from "./Account.module.css";


const Account = () => {
    return (
        <div className={styles.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="signup.html">Signup</a>

        </div>
    )
}

export default Account