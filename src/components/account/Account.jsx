import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import styles from "./Account.module.css";



const Account = () => {

    const { currentUser, logout } = useAuth();
    return (
        <div className={styles.account}>

            {
                currentUser ?
                    (<Fragment>
                        <span className="material-icons-outlined" title="Account">
                            account_circle
                        </span>
                        <span>{currentUser.displayName}</span>
                        <span className="material-icons-outlined" title="Logout" onClick={logout}>
                            {" "}
                            logout  {" "}

                        </span>


                    </Fragment>) :
                    (<Fragment>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </Fragment>)
            }



        </div>
    )
}

export default Account