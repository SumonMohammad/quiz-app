import React from 'react';
import { Link } from "react-router-dom";
import Video from './Video';
import styles from "./Videos.module.css";

const Videos = () => {
  return (
    <div className={styles.videos}>
      <Link to="/quiz"><Video /></Link>
      <Link to="/quiz"><Video /></Link>
      <Link to="/quiz"><Video /></Link>
      <Link to="/quiz"><Video /></Link>
      <Link to="/quiz"><Video /></Link>
      <Link to="/quiz"><Video /></Link>


    </div>
  )
}

export default Videos