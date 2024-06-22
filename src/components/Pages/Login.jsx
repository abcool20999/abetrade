// components/Pages/LoginPage.js

import {React, useEffect, useState} from 'react';

const LoginI = () => {
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



// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../UseFetch";

// https://developers.google.com/identity/gsi/web/reference/js-reference

const Login = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:8080"
  );
  const VITE_REACT_APP_GOOGLE_CLIENT_ID="596693022834-oou2lgt3l76t8329mbvjo0p3ss6330ho.apps.googleusercontent.com"
  useEffect(() => {
    //var clientid = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID
    var clientid = VITE_REACT_APP_GOOGLE_CLIENT_ID
    console.log(clientid)
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        //client_id: import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID,
        client_id: VITE_REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("loginDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "signin_with",
        shape: "pill",
      });

      // google.accounts.id.prompt()
    }
  }, [handleGoogle]);

  return (
    <>
      <nav style={{ padding: "2rem" }}>
        <Link to="/">Go Back</Link>
      </nav>
      <header style={{ textAlign: "center" }}>
        <h1>Login to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? <div>Loading....</div> : <div id="loginDiv"></div>}
      </main>
      <footer></footer>
    </>
  );
};

export default Login;
//export default Login;
