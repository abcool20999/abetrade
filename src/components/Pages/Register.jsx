// components/Pages/RegisterPage.js

import React from 'react';

const RegisterPage = () => {
  const handleRegister = () => {
    // Handle registration logic
  };

  const handleLoginWithGoogle = () => {
    // Handle login with Google logic
  };

  const handleLoginWithApple = () => {
    // Handle login with Apple logic
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="social-login">
        <button onClick={handleLoginWithGoogle}>Login with Google</button>
        <button onClick={handleLoginWithApple}>Login with Apple</button>
      </div>
    </div>
  );
};

export default Register;
