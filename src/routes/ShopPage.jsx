import styles from "../styles/shop.module.css";
import { useProducts } from "../contexts/ProductsContext";
import { useState, useMemo } from "react";
import Product from "../components/productItem";
import { searchForProducts } from "../data";
import { Search } from "lucide-react";
import { Bouncy } from "ldrs/react";
import { FourSquare } from "react-loading-indicators";
export default function ShopPage() {
  const { data: products, isPending: isLoading, error } = useProducts();
  const [query, setQuery] = useState("");
  const productsByQuery = useMemo(
    () => searchForProducts(query, products),
    [query, products]
  );

  if (isLoading)
    return (
      <div className={styles.loadingIndicator}>
        <FourSquare color="#000000" size="medium" text="" textColor="" />
      </div>
    );
  if (error) return new Error(error.message);

  return (
    <main className={styles.shopPageContainer}>
      <div className={styles.shopHeaderContent}>
        <h3>Discover Brand New Products</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          role="search"
          className={styles.searchForm}
        >
          <input
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className={styles.searchInput}
            id="search"
          />
          <Search />
        </form>
      </div>
      <section className={styles.shopItemsContainer}>
        {productsByQuery.map((product) => {
          return <Product productData={product} key={product.id} />;
        })}
      </section>
    </main>
  );
}
