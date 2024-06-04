// components/Pages/LoginPage.js

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder login logic
    console.log('Logging in with:', email, password);
    // Clear form fields after login
    setEmail('');
    setPassword('');
  };

  const handleLoginWithGoogle = () => {
    // Placeholder login with Google logic
    console.log('Logging in with Google');
  };

  const handleLoginWithApple = () => {
    // Placeholder login with Apple logic
    console.log('Logging in with Apple');
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button onClick={handleLoginWithGoogle}>Login with Google</button>
        <button onClick={handleLoginWithApple}>Login with Apple</button>
      </div>
    </div>
  );
};

export default Login;
