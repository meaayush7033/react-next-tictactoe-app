import React from "react";
import styles from "@/styles/Home.module.css";

function Square({value, onSquareClick}) {
  function handleClicked() {
    setValue("X");
  }

  return <div className={styles.square} onClick={onSquareClick}>{value}</div>;
}

export default Square;
