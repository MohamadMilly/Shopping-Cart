import { Form } from "react-router";
import { Link } from "react-router";
import styles from "../styles/product.module.css";
export default function Product({ productData }) {
  const { title, price, image, description, id } = productData;
  return (
    <div className={styles.productContainer}>
      <img src={image} alt={description} className={styles.productImg}></img>
      <div className={styles.productInfo}>
        <p className={styles.productTitle}>{title}</p>
        <p>Price: {price}</p>
      </div>

      <Link to={`/product/${id}`} className={styles.showDetailsLink}>
        Show Details
      </Link>
    </div>
  );
}
