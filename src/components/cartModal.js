import React from "react";
import styles from '../styles/CartModal.module.css'
import { useValue } from "../itemsContext";

function CartModal() {
    const {total,handleClear,cart,toggleCart} = useValue();
    console.log(cart);
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleCart} >
        Close
      </div>
      <div className={styles.clearButton} onClick={handleClear}>
        Clear
      </div>
      <div className={styles.itemContainer}>
      {cart.map((item)=>(
        <>
        <div className={styles.cartCard} key={item.id}>
            <h1>{item.name}</h1>
            <h3>{item.qty}</h3>
            <h3>{item.qty*item.price}</h3>
        </div>

        </>
      ))}

      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>&#x20B9; {total}</div>
      </div>
    </div>
  );
}

export default CartModal;
