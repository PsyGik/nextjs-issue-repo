import Image from "next/image";
import React from "react";
// import styles from "./random.module.scss";
import styles from "./bar-app.module.scss";

const BarApp = ({ brand }) => {
  console.log(styles);
  return (
    <div className={styles.container}>
      <span className={styles.text}>Bar App</span>
    </div>
  );
};

export default BarApp;
