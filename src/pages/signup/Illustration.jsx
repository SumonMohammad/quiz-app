import React from 'react';
import styles from "./Illustration.module.css";



const Illustration = ({ imageSrc }) => {
    return (
        <div className={styles.illustration}>
            <img src={imageSrc} alt="Signup" />
        </div>

    )
}

export default Illustration