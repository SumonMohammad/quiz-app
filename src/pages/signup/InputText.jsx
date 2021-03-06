import React from 'react';
import styles from "./InputText.module.css";


const InputText = ({ icon, ...rest }) => {
    return (
        <div className={styles.textInput}>
            <input {...rest} />
            <span className="material-icons-outlined"> {icon}</span>
        </div>
    )
}

export default InputText