import { createContext, useContext, useState } from "react";
import CartModal from "./components/cartModal";

export const itemContext = createContext();

export const useValue = ()=>{
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext(props){
    const [total,setTotal] = useState(0);
    const [item,setItem] = useState(0);
    const [showCart,setShowCart] = useState(false);
    const [cart,setCart] = useState([]);


    function handleAdd(price){
        setTotal(total+price);
        setItem(item+1);
    }

    function handleRemove(price){
        if(total<=0){
            return;
        }
        setTotal(total-price);
        setItem(item-1);
    }

    function handleClear(){
        setItem(0);
        setTotal(0);
    }

    function toggleCart(){
        console.log(showCart);
        setShowCart(!showCart);
    }

    return(
        <>
            <itemContext.Provider value={{handleAdd,handleRemove,total,item,handleClear,toggleCart}}>
                {showCart && <CartModal /> }
                {props.children}

            </itemContext.Provider>
        </>
    )
}

export default CustomItemContext;