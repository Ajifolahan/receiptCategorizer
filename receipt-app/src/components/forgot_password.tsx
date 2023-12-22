import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="passsword">New Password</label>
        <input
          value={newP}
          onChange={(e) => setnewP(e.target.value)}
          type="password"
          id="newPassword"
          name="newPassword"
          placeholder="Enter new password"
        />
        <label htmlFor="password">Confirm New Password</label>
        <input
          value={confirmP}
          onChange={(e) => setconfirmP(e.target.value)}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm new password"
        />
        <button type="submit" onClick={() => navigate("/login")}>
          Reset Password
        </button>
      </form>
    </Fragment>
  );
}

export default ForgotPassword;
