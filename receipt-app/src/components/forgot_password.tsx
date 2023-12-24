import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";

function ForgotPassword() {
  const [newP, setnewP] = useState("");
  const [confirmP, setconfirmP] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newP, confirmP);
  };
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={styles.registerbody}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <h3>Reset Password</h3>
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
          <button type="button" onClick={() => navigate("/login")}>
            Reset Password
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
