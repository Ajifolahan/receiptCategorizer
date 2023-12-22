import { Link } from "react-router-dom";
import "./landing_page.module.css";

function LandingPage() {
  return (
    <header>
      <h1>Smart Expense Tracker</h1>
      <p>Manage your receipts efficiently and visualize your spending.</p>
      <nav>
        <ul>
          <li>
            <Link to="/register">Register/Login</Link> {}
          </li>
        </ul>
      </nav>
    </header>
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
