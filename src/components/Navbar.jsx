import { NavLink } from "react-router";
import styles from "../styles/navbar.module.css";
import { House, Store, ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <nav className={styles.navigationBar}>
      <h1 className={styles.title}>ShowShop</h1>
      <ul className={styles.navigationItems}>
        <li className={styles.navigationItem}>
          <NavLink
            to={"home"}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navlink
            }
          >
            <House />
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
            <Store />
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
            <ShoppingCart />
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
