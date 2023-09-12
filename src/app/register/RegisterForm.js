import React from 'react'

const RegisterForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.loginForm}>
        <h2>Register</h2>
        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <input type="password" id="repeatPassword" name="repeatPassword" />
        </div>
        <button className={styles.loginButton} type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
