// import { WhoAmIRequest } from "@/api";
import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import appConfig from "../../../../app-config"
import {jwtDecode} from 'jwt-decode';
import axios from 'axios'
=======

import {jwtDecode} from 'jwt-decode';
>>>>>>> refs/remotes/origin/master

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

<<<<<<< HEAD
async function getAccountById(){
  try {
    let token = getAuthToken()
    if(!token) return {}
    let config = {
      method: 'get',
      // maxBodyLength: Infinity,
      // url: 'http://localhost:5000/api/auth/login',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    };
  
    var response = await axios(`${appConfig.BACKEND_BASE_URL}/api/account/get-account-by-id`, config)
    let data = response.data
    console.log(data)
    if(data.data){
      return data.data
    } 
  } catch (error) {
    console.log(error)
    return null
  }

}

=======
>>>>>>> refs/remotes/origin/master
export const AuthIsSignedIn = ({ children }) => {
  console.log('im inside AuthIsSignedIn')
  const { authStatus } = useContext(AuthContext);
  return <>{authStatus === AuthStatus.SignedIn ? children : null}</>;
  // return <>{ children }</>;
};

export const AuthIsNotSignedIn = ({ children }) => {
  console.log('im inside AuthIsNotSignedIn')
  const { authStatus } = useContext(AuthContext);
  return <>{authStatus === AuthStatus.SignedOut ? children : null}</>;
  // return <>{ children }</>;
};

const AuthProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);
<<<<<<< HEAD
  const [account, setAccount] = useState({});
=======
>>>>>>> refs/remotes/origin/master

  useEffect(() => {
    async function getWhoAmI() {
      try {
        let token = getAuthToken()
        // const res = await WhoAmIRequest();
        token?setAuthStatus(AuthStatus.SignedIn): setAuthStatus(AuthStatus.SignedOut);
<<<<<<< HEAD
        let account = await getAccountById()
        setAccount(account)
=======
>>>>>>> refs/remotes/origin/master
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
<<<<<<< HEAD
    account,
    getAccountById,
    getAuthToken
=======
>>>>>>> refs/remotes/origin/master
  };

  // if (authStatus === AuthStatus.Loading) {
  //   return null;
  // }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
