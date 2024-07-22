// import { WhoAmIRequest } from "@/api";
import React, { useContext, useEffect, useState } from "react";

import {jwtDecode} from 'jwt-decode';

// Function to get the auth token from localStorage and check if it exists and is not expired
export const getAuthToken = () => {
  const token = localStorage.getItem('propAuthToken');
  debugger
  if (!token) return null;

  try {
    const decodedToken = jwtDecode(token);
    if (Date.now() >= decodedToken.exp * 1000) {
      localStorage.removeItem('propAuthToken');
      return null;
    }
    return token;
  } catch (e) {
    localStorage.removeItem('propAuthToken');
    return null;
  }
};
 

export const AuthStatus = {
  Loading: 'Loading',
  SignedIn: 'SignedIn',
  SignedOut: 'SignedOut',
};

const defaultState = {
  authStatus: AuthStatus.Loading,
};

export const AuthContext = React.createContext(defaultState);

export const AuthIsSignedIn = ({ children }) => {
  const { authStatus } = useContext(AuthContext);
  return <>{authStatus === AuthStatus.SignedIn ? children : null}</>;
};

export const AuthIsNotSignedIn = ({ children }) => {
  const { authStatus } = useContext(AuthContext);
  return <>{authStatus === AuthStatus.SignedOut ? children : null}</>;
};

const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);

  useEffect(() => {
    async function getWhoAmI() {
      try {
        let token = getAuthToken()
        // const res = await WhoAmIRequest();
        token?setAuthStatus(AuthStatus.SignedIn): setAuthStatus(AuthStatus.SignedOut);
      } catch (e) {
        setAuthStatus(AuthStatus.SignedOut);
      }
    }
    getWhoAmI();
  }, [setAuthStatus, authStatus]);

  const signIn = () => {
    setAuthStatus(AuthStatus.SignedIn);
  };

  const signOut = () => {
    setAuthStatus(AuthStatus.SignedOut);
  };

  const state = {
    authStatus,
    signIn,
    signOut,
  };

  if (authStatus === AuthStatus.Loading) {
    return null;
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
