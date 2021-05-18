import Image from "next/image";
import React from "react";
import styles from "./app-bar.module.scss";

const AppBar = ({ brand }) => {
  console.log(styles);
  return (
    <div className={styles.appBar}>
      <span className={styles.text}>App Bar</span>
    </div>
  );
};

export default AppBar;
