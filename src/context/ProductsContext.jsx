import { createContext } from "react";
import { products } from "../assets/assets";

export const ProductsContext=createContext();

function ContextProvider(props){

    const currency='$';
    const deliveryfee=10;

    const value={
        products,currency,deliveryfee
    }
    
    return(
        <>
        <ProductsContext.Provider value={value}>
            {props.children}
        </ProductsContext.Provider>
        </>
    );
}

export default ContextProvider