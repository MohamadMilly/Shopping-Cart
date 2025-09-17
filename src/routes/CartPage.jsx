import {
  useLoaderData,
  redirect,
  Form,
  useParams,
  useNavigate,
} from "react-router";
import { purchasedData, unpurchaseData } from "../data";
import styles from "../styles/cart.module.css";
import { ShoppingBasket } from "lucide-react";

export function loader() {
  const purchasedProducts = purchasedData();
  return { purchasedProducts };
}
export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get("id");
  unpurchaseData(id);
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
            return (
              <div key={product.id} className={styles.cartItem}>
                <div className={styles.cartItemImageContainer}>
                  <img
                    src={product.image}
                    alt={product.description}
                    className={styles.cartItemImage}
                  />
                </div>
                <div className={styles.cartItemInfo}>
                  <p>
                    <b>{product.title}</b>
                  </p>
                  <p>Amount: {product.amount}</p>
                  <p>Description: {product.description}</p>
                  <p>Price : {product.price * product.amount}</p>
                  <Form method="post">
                    <input type="hidden" value={product.id} name="id" />
                    <button
                      type="submit
                      
                "
                      className={styles.unpurchaseButton}
                    >
                      Unpurchase
                    </button>
                  </Form>
                </div>
              </div>
            );
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
