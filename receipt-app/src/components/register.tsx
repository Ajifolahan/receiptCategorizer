import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./register.module.css";

function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <h3>Register</h3>
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
      <Link to="/login">Already have an account? Log in</Link>
    </Fragment>
  );
}

export default Register;
