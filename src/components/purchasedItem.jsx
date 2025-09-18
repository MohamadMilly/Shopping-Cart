import { usePurchased } from "../contexts/PurchasedContext";

export function PurchasedProduct({ product, styles }) {
  const { setCartItems, cartItems } = usePurchased();
  const handleAmountIncremeant = () => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === product.id) {
        return { ...product, amount: product.amount + 1 };
      } else {
        return cartItem;
      }
    });
    setCartItems(updatedItems);
  };
  const handleAmountDecremeant = () => {
    const updatedItems = cartItems.map((cartItem) => {
      if (cartItem.id === product.id) {
        return { ...product, amount: product.amount - 1 };
      } else {
        return cartItem;
      }
    });
    setCartItems(updatedItems);
  };
  const handleUnpurchase = (id) => {
    const index = cartItems.find((cartItem) => cartItem.id === id);
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
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
