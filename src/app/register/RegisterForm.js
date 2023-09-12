import React from 'react';
import Link from 'next/link';
import './registerForm.css'


const RegisterForm = () => {
  return (
    <div className="container">
      <form className="registrationForm">
        <h2>Register</h2>
        <div className="formGroup">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="formGroup">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="formGroup">
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input type="password" id="repeatPassword" name="repeatPassword" />
        </div>
        <button className="registrationButton" type="submit">
          Register
        </button>
        <p>
          Already have an account?{' '}
          <Link className="login" href="/Login">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
