import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newP, setnewP] = useState("");
  const [confirmP, setconfirmP] = useState("");
  const [message, setMessage] = useState(""); // display message to the user
  const navigate = useNavigate();

  useEffect(() => {
    setMessage(""); // Clear the message when the component is first rendered
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/forgot", {
        email,
        newP,
        confirmP,
      });
      console.log(response.data);
      if (response.data.message === "Password reset successfully") {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else if (response.data.message === "Email address not on file") {
        setTimeout(() => {
          navigate("/register");
        }, 2000);
      } else if (response.data.message === "Passwords do not match") {
        setTimeout(() => {
          navigate("/forgot");
        }, 2000);
      }
      setMessage(response.data.message); // we get the message from the api backend and display it to the user
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <div className={styles.registerbody}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <h3>Reset Password</h3>
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
          <label htmlFor="password">New Password</label>
          <input
            value={newP}
            onChange={(e) => setnewP(e.target.value)}
            type="password"
            size={50}
            id="newPassword"
            name="newPassword"
            placeholder="********"
          />
          <label htmlFor="password">Confirm New Password</label>
          <input
            value={confirmP}
            onChange={(e) => setconfirmP(e.target.value)}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="********"
          />
          <button type="submit">Reset Password</button>
        </form>
        <p className={styles.message}>{message}</p>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
