import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((item)=>(
        <>
          <ItemCard key={item.id} name={item.name} price={item.price} id={item.id} />
        </>
      ))}
    </div>
  );
}

export default Items;
