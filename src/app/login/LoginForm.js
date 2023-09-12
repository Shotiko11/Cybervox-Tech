import React, { useState } from "react";
import Link from "next/link";
import "./loginForm.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="loginButton">
          Login
        </button>
        <p>
          {"Don't"} have an account? <Link className="register" href="/Register">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
