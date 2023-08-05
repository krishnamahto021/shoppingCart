import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../itemsContext";

function Navbar() {
  const {total,item,handleClear,toggleCart} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total} </h1>
      <h1>Items: {item} </h1>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton}  onClick={handleClear}>Reset</button>
        <button className={styles.itemButton} onClick={toggleCart}>
         Cart
        </button>
      </div>
    </div>
    
  );
}

export default Navbar;
