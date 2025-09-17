import { redirect, useParams } from "react-router";
import { useProducts } from "../contexts/ProductsContext";
import { useNavigate } from "react-router";
import { Form } from "react-router";
import { useState } from "react";
import { purchaseProduct } from "../data";
import styles from "../styles/purchase.module.css";

export async function action({ params, request }) {
  const formData = await request.formData();
  const amount = Number(formData.get("amount"));
  const title = formData.get("title");
  const price = Number(formData.get("price"));
  const description = formData.get("description");
  const image = formData.get("image");
  const data = { title, price, description, image, id: params.id };
  purchaseProduct(data, amount);
  return redirect("/cart");
}

export function PurchasePage() {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const { data: products, isPending } = useProducts();
  const navigate = useNavigate();

  if (isPending) return <p>Loading...</p>;

  const product = products.find((product) => product.id == id);

  const handleAmountIncrease = () => {
    setAmount(amount + 1);
  };
  const handleAmountdecrease = () => {
    setAmount(amount - 1);
  };
  return (
    <div className={styles.purchasedProductContainer}>
      <div>
        <img
          src={product.image}
          alt={product.description}
          className={styles.purchasedProductImage}
        />
      </div>
      <div className={styles.purchasedProductInfo}>
        <p>
          <b>{product.title}</b>
        </p>
        <p>{product.description}</p>
        <p>Price: {product.price * amount}</p>
        <Form method="post" className={styles.amountForm}>
          <input type="hidden" value={product.title} name="title" />
          <input type="hidden" value={product.description} name="description" />
          <input type="hidden" value={product.price} name="price" />
          <input type="hidden" value={product.image} name="image" />
          <label htmlFor="amount">Amount: </label>
          <input
            className={styles.amountInput}
            type="number"
            name="amount"
            id="amount"
            readOnly
            value={amount}
          />
          <span>
            <button
              className={styles.increaseButton}
              type="button"
              onClick={handleAmountIncrease}
            >
              +
            </button>
            <button
              className={styles.decreaseButton}
              type="button"
              onClick={handleAmountdecrease}
            >
              -
            </button>
          </span>
          <div className={styles.buttonsContainer}>
            <button type="submit" className={styles.addToCartButton}>
              Add to Cart
            </button>
            <button
              className={styles.cancelButton}
              type="button"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
