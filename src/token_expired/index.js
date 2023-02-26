import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";



const Tokenexp = () => {

    const navigate = useNavigate();

  const login_redirect = () => {
    navigate("/");
  };

  return (
    <div id='error-page'>
      <h1>Token expired, Please re-login</h1>
      <button onClick={() => login_redirect()}>Go to login page</button>
    </div>
  );
};

export default Tokenexp;
