import React from "react";

const signUp = () => {
  
  return (
    <>
      
     <div id="signUp">
      <img id="img" src="https://i.pinimg.com/originals/08/cc/66/08cc66cca6f975c721f6cf1aa481f238.jpg"/>
      <h1>Welcome to Movie Venture</h1>
     <input type="text" placeholder="Enter Name" id="name"></input>
     <input type="email" placeholder="Enter Email" id="email"></input>
     <input type="number" placeholder="Enter Mobile Number" id="mobile"></input>
     <input type="password" placeholder="Enter Password" id="password"></input>
     <button id="submit">Sign Up</button>
     <div id="box">
        <p>Already have an account? Log In</p>
      </div>
      </div>
     
    </>
  );
};

export default signUp;