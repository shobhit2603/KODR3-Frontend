import { createContext, useState } from "react";
import { cardData } from "../data/cardData";

 const AppContext = createContext();

 if(!localStorage.getItem("products")){
    localStorage.setItem("products", JSON.stringify(cardData))
 }

const AppContextProvider = ({ children }) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("products")))
  return <AppContext.Provider value={{products, setProducts}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
export { AppContext };
