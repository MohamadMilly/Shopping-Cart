import { Form } from "react-router";

export function PurchasedProduct({ product, styles }) {
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
            <Form method="post">
              <input type="hidden" name="id" value={product.id} />
              <input type="hidden" name="actionType" value="decrement" />
              <button type="submit" className={styles.decreaseButton}>
                -
              </button>
            </Form>

            <input
              className={styles.amountInput}
              value={product.amount}
              readOnly
            />

            <Form method="post">
              <input type="hidden" name="id" value={product.id} />
              <input type="hidden" name="actionType" value="increment" />
              <button type="submit" className={styles.increaseButton}>
                +
              </button>
            </Form>
          </div>
        </div>
        <p>Description: {product.description}</p>
        <p>Price : {product.price * product.amount}</p>
        <Form method="post">
          <input type="hidden" value={product.id} name="id" />

          <button type="submit" className={styles.unpurchaseButton}>
            Unpurchase
          </button>
        </Form>
      </div>
    </div>
  );
}
