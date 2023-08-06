import { createContext, useContext, useState } from "react";
import CartModal from "./components/cartModal";

export const itemContext = createContext();

export const useValue = () => {
  const value = useContext(itemContext);
  return value;
};

function CustomItemContext(props) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  function handleAdd(product) {
    const { id, price } = product;
    const index = cart.findIndex((i) => i.id === id);
    if (index === -1) {
      setCart([...cart, { ...product, qty: 1 }]);
      setTotal(total + price);
      setItem(item + 1);
    } else {
      cart[index].qty++;
      setCart(cart);
      setTotal(total + price);
      setItem(item + 1);
    }
  }

  function handleRemove(product) {
    const { id, price } = product;
    const index = cart.findIndex((i) => i.id === id);
    const newCart = [...cart]; // we made the new cart so that we can update the setCart and follow the unmutuality property of state variable
    if (index !== -1) {
      newCart[index].qty--;
      setItem(item - 1);
      if (newCart[index].qty === 0) {
        // to remove the product if it have 0 quantity
        newCart.splice(index, 1);
      }
      setTotal(total - price);
    }
    setCart(newCart);
  }

  function handleClear() {
    setItem(0);
    setTotal(0);
    setCart([]);
  }

  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <>
      <itemContext.Provider
        value={{
          handleAdd,
          handleRemove,
          total,
          item,
          handleClear,
          cart,
          toggleCart,
        }}
      >
        {showCart && cart.length && <CartModal />}
        {props.children}
      </itemContext.Provider>
    </>
  );
}

export default CustomItemContext;
