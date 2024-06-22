// components/Pages/RegisterPage.js

import React from 'react';

const SignUp = () => {
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




// Signup.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../UseFetch";

// https://developers.google.com/identity/gsi/web/reference/js-reference

const Register = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:5000/api/auth/signup"
  );

  useEffect(() => {
    const VITE_REACT_APP_GOOGLE_CLIENT_ID="596693022834-oou2lgt3l76t8329mbvjo0p3ss6330ho.apps.googleusercontent.com"

    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: VITE_REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
        // type: "standard",
        theme: "filled_black",
        // size: "small",
        text: "continue_with",
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
        <h1>Register to continue</h1>
      </header>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <form method='post' action ='http://localhost:5000/api/auth/signup'>
            <div className='row'>
              <label htmlFor='fullname' className='col-4'>FullName</label>
              <input name='fullname' type='text' className='col-8' defaultValue=''/>
            </div>
            <div className='row'>
              <label htmlFor='email' className='col-4'>Email</label>
              <input name='email' type='text' className='col-8' defaultValue=''/>
            </div>
            <div className='row'>
              <label htmlFor='password' className='col-4'>Password</label>
              <input name='password' type='text' className='col-8' defaultValue=''/>
            </div>
            <div>
              <input name='from' type='hidden' value='form' className='bg-black rounded-4 text-white'/>
            </div>
            <input type='submit' defaultValue='Register'/>
          </form>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div id="signUpDiv" data-text="signup_with"></div>
        )}
      </main>
      <footer></footer>
    </>
  );
};

//export default SignUp;
export default Register;
