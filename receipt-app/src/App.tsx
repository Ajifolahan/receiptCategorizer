import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import LandingPage from "./components/landing_page";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgot_password";

function App() {
  const [currentForm, setcurrentForm] = useState("register");

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;