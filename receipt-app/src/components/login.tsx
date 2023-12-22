import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="email">Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
        />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/forgot">Forgot Password</Link>
      <Link to="/register">Don't have an account? Register here</Link>
    </Fragment>
  );
}

export default Login;
