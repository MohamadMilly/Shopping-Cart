import styles from "../styles/home.module.css";
import { useNavigate } from "react-router";
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className={styles.home}>
      <div className={styles.overlay}>
        <h2 className={styles.homeTitle}>Discover Everything You Imagine</h2>
        <p className={styles.appHint}>
          ShowShop is the largest online store in the globe , because of fast ,
          reliable and safe service .
        </p>
        <button className={styles.homeButton} onClick={() => navigate("/shop")}>
          Shop Now !
        </button>
      </div>
    </section>
  );
}
