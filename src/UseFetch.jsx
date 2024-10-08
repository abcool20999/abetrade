// useFetch.jsx
import { useState } from "react";

const UseFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogle = async (response) => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ 
        credential: response.credential,
        from: 'google'
       }),
    })
      .then((res) => {
        setLoading(false);

        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          localStorage.setItem("user", JSON.stringify(data?.user));
          window.location.reload();
          let token = data.user.token
          if(token) {
            localStorage.setItem('propAuthToken', JSON.stringify({ token})); 
          }
    
        }

        throw new Error(data?.message || data);
      })
      .catch((error) => {
        setError(error?.message);
      });
  };  
  return { loading, error, handleGoogle };
};

export default UseFetch;