import React from 'react';
import Checkbox from "../../pages/signup/Checkbox";
import styles from "./Answers.module.css";


const Answers = ({ options = [], handleChange }) => {
    return (
        <div className={styles.answers}>

            {
                options.map((option, index) => (
                    <Checkbox
                        className={styles.answer}
                        text={option.title}
                        key={index}
                        value={index}
                        checked={option.checked}
                        onChange={(e) => handleChange(e, index)} />

                ))
            }

        </div>
    )
}

export default Answers