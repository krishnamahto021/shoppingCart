import { createContext, useContext, useState } from "react";

export const itemContext = createContext();

export const useValue = ()=>{
    const value = useContext(itemContext);
    return value;
}

function CustomItemContext(props){
    const [total,setTotal] = useState(0);
    const [item,setItem] = useState(0);

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

    return(
        <>
            <itemContext.Provider value={{handleAdd,handleRemove,total,item}}>
                {props.children}
            </itemContext.Provider>
        </>
    )
}

export default CustomItemContext;