import { createContext, useContext, useState } from "react";

const PurchasedContext = createContext([]);

function PurchaseProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <PurchasedContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </PurchasedContext.Provider>
  );
}

const usePurchased = () => useContext(PurchasedContext);
export { usePurchased };
export { PurchaseProvider };
