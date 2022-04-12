import React from 'react';
import styles from "./Button.module.css";

const Button = ({ className, children }) => {
    return (
        <div className={`${styles.button} ${className}`}>
            {children}
        </div>
    )
}

export default Button