import { Link } from "react-router-dom";
import styles from "./landing_page.module.css";

function LandingPage() {
  return (
    <div className={styles.landingbody}>
      <header className={styles.landingheader}>
        <h1 className={styles.landingtitle}>Smart Expense Tracker</h1>
        <p className={styles.landingdescription}>
          Manage your receipts efficiently and visualize your spending.
        </p>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/register" className={styles.navLink}>
                Register/Login
              </Link>{" "}
              {}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default LandingPage;

/*
npm create vite@latest
React is a javascript library for building user interfaces.
It uses component based which is then called in the main function.
using bootstrap for styling- updated bootstrap in main.tsx
using react-router-dom for navigation
a component cannot return more than one element, so it can be wrapped in a div or create a fragment
we are using typescript and JSX
 */
