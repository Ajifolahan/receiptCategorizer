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
