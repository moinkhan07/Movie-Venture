import React from "react";
import {NavLink,Link} from 'react-router-dom';

const logInUser = () => {

  const navStyleLink = ()=>{
    return{
      marginTop: "20px",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      color:"black"
    }
  }
  
  return (
    <>
    <div id="loginDiv">
    <Link to={'/'}><img src={require('../Assets/logo.jpg')} /></Link>
    <h2>Welcome To Movie Venture</h2>
    <input placeholder="Enter Email" type={"email"}/>
    <input placeholder="Enter Password" type={"password"}/>
    <button>Log In</button>
    <hr/>
    <NavLink to={'/signup'} style={navStyleLink}><p id="newUser">New User? Sign Up</p></NavLink>
    </div>
    </>
  );
};

export default logInUser;
