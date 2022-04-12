import React from 'react';
import Checkbox from "../../pages/signup/Checkbox";
import styles from "./Answers.module.css";


const Answers = () => {
    return (
        <div className={styles.answers}>
            <Checkbox className={styles.answer} text="test answer" />
        </div>
    )
}

export default Answers