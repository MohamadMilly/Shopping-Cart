import styles from "../styles/shop.module.css";
import { useProducts } from "../contexts/ProductsContext";
import Product from "../components/productItem";

export default function ShopPage() {
  const { data: products, isPending: isLoading, error } = useProducts();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <main className={styles.shopPageContainer}>
      <h3>Discover Brand New Products</h3>
      <section className={styles.shopItemsContainer}>
        {products.map((product) => {
          return <Product productData={product} key={product.id} />;
        })}
      </section>
    </main>
  );
}
