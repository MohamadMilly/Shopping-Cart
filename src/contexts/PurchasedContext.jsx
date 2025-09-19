import { createContext, useContext, useReducer } from "react";
import purchasedReducer from "../reducers/purchasedReducer.jsx";
const PurchasedContext = createContext([]);

function PurchaseProvider({ children }) {
  const [cartItems, dispatchCartItems] = useReducer(purchasedReducer, []);
  return (
    <PurchasedContext value={{ cartItems, dispatchCartItems }}>
      {children}
    </PurchasedContext>
  );
}

const usePurchased = () => useContext(PurchasedContext);
export { usePurchased };
export { PurchaseProvider };
