import {
  useLoaderData,
  redirect,
  Form,
  useParams,
  useNavigate,
} from "react-router";
import { purchasedData, unpurchaseData } from "../data";
import styles from "../styles/cart.module.css";

export function loader() {
  return { purchasedData };
}
export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get("id");
  unpurchaseData(id);
}

export default function CartPage() {
  const { purchasedData } = useLoaderData();
  const totalPrice = purchasedData.reduce(
    (acc, cur) => acc + cur.price * cur.amount,
    0
  );
  return (
    <main className={styles.cartContainer}>
      <section className={styles.cartItemsContainer}>
        {purchasedData.length > 0 ? (
          purchasedData.map((product) => {
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
          <p>Nothing in the cart</p>
        )}
        <h1>Total: {totalPrice}</h1>
      </section>
    </main>
  );
}
