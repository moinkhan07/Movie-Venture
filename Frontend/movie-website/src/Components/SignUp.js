import React from "react";
import { NavLink, Link } from "react-router-dom";

const signUp = () => {
  const navStyleLink = ({ isActive }) => {
    return {
      marginTop: "20px",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      color:"black"
    };
  };
  return (
    <>
       <div id="signupDiv">
    <Link to={'/'}><img src={require('../Assets/logo.jpg')} /></Link>
    <h2>Welcome To Movie Venture</h2>
    <input placeholder="Enter FirstName" type={"text"}/>
    <input placeholder="Enter LastName" type={"text"}/>
    <input placeholder="Enter Email" type={"email"}/>
    <input placeholder="Enter Password" type={"password"}/>
    <button>Log In</button>
    <hr/>
    <NavLink to={'/login'} style={navStyleLink}><p id="already">Already have an account? Log In</p></NavLink>
    </div>
    </>
  );
};

export default signUp;
