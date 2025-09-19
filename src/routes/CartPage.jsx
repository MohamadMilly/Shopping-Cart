import styles from "../styles/cart.module.css";
import { ShoppingBasket } from "lucide-react";
import { PurchasedProduct } from "../components/purchasedItem";
import { usePurchased } from "../contexts/PurchasedContext";

export default function CartPage() {
  const { cartItems } = usePurchased();
  const totalPrice = cartItems
    .reduce((acc, cur) => acc + cur.price * cur.amount, 0)
    .toFixed(2);

  return (
    <main className={styles.cartContainer}>
      <section className={styles.cartItemsContainer}>
        {cartItems.length > 0 ? (
          cartItems.map((product) => {
            return <PurchasedProduct product={product} styles={styles} />;
          })
        ) : (
          <div className={styles.emptyCardHintContainer}>
            <ShoppingBasket size={64} strokeWidth={1} />
            <h1 className={styles.NothingInTheCartHeading}>
              Nothing In The Cart !
            </h1>
          </div>
        )}
        {cartItems.length > 0 && (
          <h1 className={styles.totalHeading}>Total: {totalPrice}</h1>
        )}
      </section>
    </main>
  );
}
