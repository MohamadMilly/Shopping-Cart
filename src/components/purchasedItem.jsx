import { usePurchased } from "../contexts/PurchasedContext";

export function PurchasedProduct({ product, styles }) {
  const { dispatchCartItems } = usePurchased();
  const handleAmountIncremeant = () => {
    dispatchCartItems({ type: "incremeant_purchased_by_one", id: product.id });
  };
  const handleAmountDecremeant = () => {
    if (product.amount <= 1) return;
    dispatchCartItems({ type: "decremeant_purchased_by_one", id: product.id });
  };
  const handleUnpurchase = (id) => {
    dispatchCartItems({ type: "unpurchase_item", id });
  };

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
        <div>
          <div className={styles.amountControl}>
            <button
              onClick={handleAmountDecremeant}
              className={styles.decreaseButton}
            >
              -
            </button>

            <input
              className={styles.amountInput}
              value={product.amount}
              readOnly
              min={1}
            />

            <button
              onClick={handleAmountIncremeant}
              className={styles.increaseButton}
            >
              +
            </button>
          </div>
        </div>
        <p>Description: {product.description}</p>
        <p>Price : {(product.price * product.amount).toFixed(2)}</p>

        <input type="hidden" value={product.id} name="id" />

        <button
          onClick={() => handleUnpurchase(product.id)}
          className={styles.unpurchaseButton}
        >
          Unpurchase
        </button>
      </div>
    </div>
  );
}
