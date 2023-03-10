import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 1;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link
          to="/"
          style={{
            color: "#e1d4c7",
            textDecoration: "none",
            paddingLeft: "1em",
            paddingRight: "1em",
          }}
        >
          Softwreen
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Todas
          </Link>
          <Link to="/category/oficina" className={styles.navbarItem}>
            Oficina
          </Link>
          <Link to="/category/gamer" className={styles.navbarItem}>
            Gamer
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
