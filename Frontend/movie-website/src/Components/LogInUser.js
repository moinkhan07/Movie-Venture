import React from "react";

const logInUser = () => {
  
  return (
    <>
      <div id="login">
      <img id="img" src="https://i.pinimg.com/originals/08/cc/66/08cc66cca6f975c721f6cf1aa481f238.jpg"/>
      <h1>Welcome to Movie Venture</h1>
     <input type="email" placeholder="Enter Email" id="email"></input>
     <input type="password" placeholder="Enter Password" id="password"></input>
     <button id="submit">Log In</button>
     <div id="box">
        <p>New User? Sign Up</p>
      </div>
      </div>
    </>
  );
};

export default logInUser;