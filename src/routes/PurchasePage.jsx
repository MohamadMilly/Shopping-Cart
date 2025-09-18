import { useParams, useNavigate } from "react-router";
import { useProducts } from "../contexts/ProductsContext";
import { useState } from "react";
import styles from "../styles/purchase.module.css";
import { usePurchased } from "../contexts/PurchasedContext";

export function PurchasePage() {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const { data: products, isPending } = useProducts();
  const navigate = useNavigate();
  const { setCartItems, cartItems } = usePurchased();
  if (isPending) return <p>Loading...</p>;
  const handleAddCartItem = (product, amount) => {
    setCartItems([...cartItems, { ...product, amount }]);
  };
  const product = products.find((product) => product.id == id);

  const handleAmountIncrease = () => {
    setAmount(amount + 1);
  };
  const handleAmountdecrease = () => {
    if (amount <= 1) return;
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
        <p>Price: {(product.price * amount).toFixed(2)}</p>

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
          <button
            onClick={() => {
              handleAddCartItem(product, amount);
              navigate("/cart");
            }}
            className={styles.addToCartButton}
          >
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
      </div>
    </div>
  );
}
