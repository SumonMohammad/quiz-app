import React from 'react';
import succesImage from "../../assets/images/success.png";
import styles from "./Summary.module.css";


const Summary = () => {
    return (
        <div className={styles.summary}>
            <div className={styles.point}>

                <p className={styles.score}>
                    Your score is <br />
                    5 out of 10
                </p>
            </div>

            <div className={styles.badge}>
                <img src={succesImage} alt="Success" />
            </div>
        </div>
    )
}

export default Summary