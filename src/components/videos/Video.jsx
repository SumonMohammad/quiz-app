import React from 'react';
import styles from "./Video.module.css";

const Video = ({ title, id, noq }) => {
    return (
        <div className={styles.video} >
            <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
            <p>{title}</p>
            <div className={styles.qmeta} >
                <p>{noq} : Questions</p>
                <p> score: {noq * 5}  </p>
            </div>
        </div>

    )
}

export default Video