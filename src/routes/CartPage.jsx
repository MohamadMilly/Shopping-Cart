import {
  getPurchasedData,
  unpurchaseData,
  updatePurchasedAmount,
} from "../data";
import styles from "../styles/cart.module.css";
import { ShoppingBasket } from "lucide-react";
import { PurchasedProduct } from "../components/purchasedItem";
import { redirect } from "react-router";
import { usePurchased } from "../contexts/PurchasedContext";

export async function action({ request }) {
  const formData = await request.formData();
  const actionType = formData.get("actionType");
  const id = formData.get("id");

  if (actionType === "increment") {
    const products = getPurchasedData();
    const item = products.find((p) => String(p.id) === String(id));
    if (item) updatePurchasedAmount(id, Number(item.amount) + 1);
    return redirect("/cart");
  }

  if (actionType === "decrement") {
    const products = getPurchasedData();
    const item = products.find((p) => String(p.id) === String(id));
    if (item) updatePurchasedAmount(id, Math.max(1, Number(item.amount) - 1));
    return redirect("/cart");
  }

  unpurchaseData(id);
  return redirect("/cart");
}

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
