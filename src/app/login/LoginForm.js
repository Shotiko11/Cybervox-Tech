import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "./loginForm.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Get the router object

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Fill every input");
      return;
    }

    // Assuming your login logic is asynchronous (e.g., calling an API)
    try {
      // Perform your login logic here

      // If login is successful, navigate to the "/" page
      router.push("/");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
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
          {"Don't"} have an account?{" "}
          <Link className="register" href="/Register">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
