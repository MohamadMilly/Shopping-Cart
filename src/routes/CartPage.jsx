import { useLoaderData, Form } from "react-router";
import {
  getPurchasedData,
  unpurchaseData,
  updatePurchasedAmount,
} from "../data";
import styles from "../styles/cart.module.css";
import { ShoppingBasket } from "lucide-react";
import { PurchasedProduct } from "../components/purchasedItem";
import { redirect } from "react-router";
export function loader() {
  const purchasedProducts = getPurchasedData();
  return { purchasedProducts };
}

export async function action({ request }) {
  const formData = await request.formData();
  const actionType = formData.get("actionType");
  const id = formData.get("id");
  if (actionType === "edit") {
    const amount = formData.get("amount");
    updatePurchasedAmount(id, amount);
    return redirect("/cart");
  }

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
  const { purchasedProducts } = useLoaderData();
  const totalPrice = purchasedProducts.reduce(
    (acc, cur) => acc + cur.price * cur.amount,
    0
  );
  return (
    <main className={styles.cartContainer}>
      <section className={styles.cartItemsContainer}>
        {purchasedProducts.length > 0 ? (
          purchasedProducts.map((product) => {
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
        {purchasedProducts.length > 0 && <h1>Total: {totalPrice}</h1>}
      </section>
    </main>
  );
}
