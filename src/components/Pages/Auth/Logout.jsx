import React from "react";

const Logout = () => {
  const handleLogout = () => {
    console.log("logout!");
    localStorage.removeItem('propAuthToken');
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;