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

//   <>
//        <div id="login">
//        <Link to={'/'}><img src="https://i.pinimg.com/originals/08/cc/66/08cc66cca6f975c721f6cf1aa481f238.jpg"/></Link>
//        <h1>Welcome to Movie Venture</h1>
//       <input type="email" placeholder="Enter Email" id="userLoginEmail"/>
//       <input type="password" placeholder="Enter Password" id="userLoginPassword"/>
//       <button id="loginBtn">Log In</button>
//       <hr id="line"/>
//       <div id="loginBox">
//       <NavLink style={navStyleLink} to={'/signup'}>
//     <p>New User? Sign Up</p>
//     </NavLink> 
//    </div>
//    </div>
// </> 