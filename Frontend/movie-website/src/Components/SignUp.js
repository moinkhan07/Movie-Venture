import React,{useState} from "react";
import { NavLink, Link } from "react-router-dom";

const SignUp = () => {
  const navStyleLink = () => {
    return {
      marginTop: "20px",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      color:"black"
    };
  };
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const registerUser = () =>{
    if(userData.firstName == ""){
      window.alert("Please enter FirstName");
      return;
    }else if(userData.lastName == ""){
      window.alert("Please enter LastName");
      return;
    }else if(userData.userEmail == ""){
      window.alert("Please enter your email");
      return;
    }else if(userData.userPassword == ""){
      window.alert("Please enter password");
      return;
    }

    const mainUrl = "";

    fetch(`${mainUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.status === 202) {
          window.alert('User Register successfully');
          setUserData({
            firstName: "",
            lastName: "",
            userEmail: "",
            userPassword: "",
          });
        } else {
          window.alert('Failed to register user!');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}
  return (
    <>
       <div id="signupDiv">
    <Link to={'/'}><img src={require('../Assets/logo.jpg')} /></Link>
    <h2>Welcome To Movie Venture</h2>
    <input value={userData.firstName} name="firstName" onChange={handleChange} placeholder="Enter FirstName" type={"text"}/>
    <input value={userData.lastName} name="lastName" onChange={handleChange} placeholder="Enter LastName" type={"text"}/>
    <input value={userData.userEmail} name="userEmail" placeholder="Enter Email" onChange={handleChange} type={"email"}/>
    <input value={userData.userPassword} name="userPassword" placeholder="Enter Password" type={"password"} onChange={handleChange}/>
    <button onClick={registerUser}>Register</button>
    <hr/>
    <NavLink to={'/login'} style={navStyleLink}><p id="already">Already have an account? Log In</p></NavLink>
    </div>
    </>
  );
}

export default SignUp;
