import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./register.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <Fragment>
      <div className={styles.registerbody}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            size={50}
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
          <button type="submit">Login</button>
        </form>
        <div className={styles.linksContainer}>
          <Link to="/forgot" className={styles.link}>
            Forgot Password
          </Link>
          <Link to="/register" className={styles.link}>
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
