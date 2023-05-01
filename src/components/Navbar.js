import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [status, setStatus] = useState();

  useEffect(() => {
    localStorage.getItem("login") ? setStatus(true) : setStatus(false);
  });

  const logOut = () => {
    localStorage.setItem("login", false);
    alert("User Logged Out");
    window.location.href = "/";
  };

  return (
    <>
      <nav>
        <div id="nav_Left">
          <div id="logoContainer">
            <img
              src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
              alt="Logo"
            />
            <span> Kafene </span>
          </div>
          <div id="Navbar_Navigation">
            <span id="navig1" 
            style={{
              borderBottom:window.location.pathname.includes('orders') ? '3px solid #21B783'  : "1px solid white",
            }}
            >
              <Link
                to="/orders"
                style={{
                  textDecoration: "none",
                  color:window.location.pathname.includes('orders') ? '#21B783'  : "black",
                }}
              >
                Orders
              </Link>
            </span>
            <span id="navig2" 
              style={{
                borderBottom:window.location.pathname.includes('products') ? '3px solid #21B783'  : "1px solid white",
              }}
            >
              <Link
                to="/products"
                style={{
                  textDecoration: "none",
                  color:window.location.pathname.includes('products') ? '#21B783'  : "black",
                }}
              >
                Products
              </Link>
            </span>
            <span id="navig3" 
             style={{
              borderBottom:window.location.pathname.includes('users') ? '3px solid #21B783'  : "1px solid white",
            }}
            >
              <Link
                to="/users"
                style={{
                  textDecoration: "none",
                  color:window.location.pathname.includes('users') ? '#21B783'  : "black",
                }}
              >
                Users
              </Link>
            </span>
          </div>
        </div>
        <div id="logoutDiv" onClick={() => logOut()}>
          Logout
        </div>
      </nav>
    </>
  );
}

export default Navbar;
