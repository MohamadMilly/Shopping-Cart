import { NavLink, useLoaderData } from "react-router";
import styles from "../styles/navbar.module.css";
import { House, Store, ShoppingCart, Menu, X } from "lucide-react";
import { getPurchasedData } from "../data";
import { useState } from "react";

export function loader() {
  const purchasedProducts = getPurchasedData();
  const purchasedCount = purchasedProducts.length;
  return { purchasedCount };
}
export function Navbar() {
  const { purchasedCount } = useLoaderData();
  const [navIsShown, setNavIsShown] = useState(false);
  return (
    <>
      <nav className={styles.navigationBar}>
        <h1 className={styles.title}>ShowShop</h1>
        <ul className={styles.navigationItems}>
          <li className={styles.navigationItem}>
            <NavLink
              to={"/home"}
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
            {purchasedCount > 0 && (
              <span className={styles.cartNotification}>{purchasedCount}</span>
            )}
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
      <nav className={styles.mobileNavbar}>
        <div className={styles.toggleButtonContainer}>
          <h1 className={styles.title}>ShowShop</h1>

          <button
            className={styles.menuNavButton}
            onClick={() => setNavIsShown(!navIsShown)}
          >
            {navIsShown ? <X /> : <Menu />}
          </button>
        </div>
        {navIsShown && (
          <>
            <ul className={styles.mobileNavigationItems}>
              <li className={styles.mobileNavigationItem}>
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.navlink
                  }
                >
                  <House />
                  Home
                </NavLink>
              </li>
              <li className={styles.mobileNavigationItem}>
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
              <li className={styles.mobileNavigationItem}>
                {purchasedCount > 0 && (
                  <span className={styles.mobileCartNotification}>
                    {purchasedCount}
                  </span>
                )}
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
          </>
        )}
      </nav>
    </>
  );
}
