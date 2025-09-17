import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../data";
import { useContext } from "react";
const ProductsContext = createContext();

export function ProductsDataProviver({ children }) {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
    staleTime: 1000 * 60 * 10,
  });

  return (
    <ProductsContext.Provider value={{ data, isPending, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
