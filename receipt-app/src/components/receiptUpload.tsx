import React, { Fragment, useState, useEffect } from "react";
import styles from "./register.module.css";

function ReceiptUpload() {
  const [selected, setselected] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setselected(e.target.files);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selected) {
      for (let i = 0; i < selected.length; i++) {
        console.log(selected[i].name);
      }
      //comment out later when we have backend
    }
  };

  return (
    <Fragment>
      <div className={styles.registerbody}>
        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <h3>Let's categorize your receipts together!</h3>
          <label htmlFor="file"></label>
          <input
            onChange={handleFileChange}
            type="file"
            size={50}
            id="file"
            name="file"
            accept="image/png, image/jpeg"
            multiple
          />
          <button type="submit">Upload</button>
        </form>
      </div>
    </Fragment>
  );
}

export default ReceiptUpload;
