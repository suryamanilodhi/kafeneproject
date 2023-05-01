import React, { useEffect, useState } from "react";
import Navbar from "../Navbar.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    passWord: "",
  });

  const navigate = useNavigate()

  
  useEffect(() => {
    checkLoginStatus()
  }, []);

  const checkLoginStatus = () => {
    if(localStorage.getItem("login") == true){
     navigate('/orders')
    }
  }

  const updatePassword = (e) => {
    setLoginDetails((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  console.log(loginDetails);

  const checkCredentials = () => {
    if ( loginDetails.userName ==  loginDetails.passWord ){
      { 
        localStorage.setItem('login',true)
        navigate('/orders')
      }
    }
    alert("Login Successful");
  };

  return (
    <>
      <Navbar />
      <section id="loginBox">
        <h1> Sign in</h1>
        <label htmlFor="Username">
          <input
            type="text"
            placeholder="username"
            id="userName"
            name="userName"
            onChange={(e) => updatePassword(e)}
          />
        </label>{" "}
        <br />
        <label htmlFor="Password">
          <input
            type="text"
            placeholder="password"
            id="userName"
            name="passWord"
            onChange={(e) => updatePassword(e)}
          />
        </label>{" "}
        <br />
        <button id="LoginBtn" onClick={() => checkCredentials()}>
          {" "}
          Login{" "}
        </button>
      </section>
    </>
  );
}

export default Login;
