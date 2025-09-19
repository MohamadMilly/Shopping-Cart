import { createContext, useContext, useState } from "react";

const PurchasedContext = createContext([]);

function PurchaseProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <PurchasedContext value={{ cartItems, setCartItems }}>
      {children}
    </PurchasedContext>
  );
}

const usePurchased = () => useContext(PurchasedContext);
export { usePurchased };
export { PurchaseProvider };
