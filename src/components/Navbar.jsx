import { NavLink } from "react-router";
import styles from "../styles/navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navigationBar}>
      <h1>ShowShop</h1>
      <ul className={styles.navigationItems}>
        <li className={styles.navigationItem}>
          <NavLink
            to={"home"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navlink
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink
            to={"/shop"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navlink
            }
          >
            Shop
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navlink
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
