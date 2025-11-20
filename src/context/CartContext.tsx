import { createContext, useState } from "react";

type book={
    id:number;
    title:string;
    author:string;
    price:number;
    ImageUrl:string;
    quantity:number;
}

type CartContextType={
    cartItems:book[];
    setCartItems:React.Dispatch<React.SetStateAction<book[]>>;
}


export const cartContext=createContext<CartContextType>({
    cartItems:[],
    setCartItems:()=>{}
});



function CartContextProvider({children}:{children:React.ReactNode}){
    const [cartItems,setCartItems]=useState<book[]>([]);
    return(
        <cartContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;