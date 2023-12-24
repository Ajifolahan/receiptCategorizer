import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LandingPage from "./components/landing_page";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgot_password";
import ReceiptUpload from "./components/receiptUpload";

function App() {
  const [currentForm, setcurrentForm] = useState("register");

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/receipt" element={<ReceiptUpload />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
