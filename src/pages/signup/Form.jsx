import React from 'react';
import styles from "./Form.module.css";

const Form = ({ children, className, ...rest }) => {
    return (
        <div className={`${className} ${styles.form}`} action="#" {...rest}>
            {children}
        </div>
    )
}

export default Form