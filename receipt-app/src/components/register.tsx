import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState(""); // display message to the user
  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    setMessage(""); // Clear the message when the component is first rendered
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        email,
        pass,
      }); //we send the email and password to the api backend. We are making a post request to the api backend
      console.log(response.data);
      setMessage(response.data.message); // we get the message from the api backend and display it to the user
      if (response.data.message === "User registered successfully") {
        // if the user was created successfully, we redirect them to the login page
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.registerbody}>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <h3>Register</h3>
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
        <button type="submit">Sign Up</button>
      </form>
      <p className={styles.message}>{message}</p>
      <div className={styles.linksContainer}>
        <Link to="/forgot" className={styles.link}>
          Forgot Password
        </Link>
        <Link to="/login" className={styles.link}>
          Already have an account? Log in
        </Link>
      </div>
    </div>
  );
}

export default Register;

//after registering, it should sign them into their session
