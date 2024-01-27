import React,{useState} from "react";
import {NavLink,Link,useNavigate} from 'react-router-dom';

const LogInUser = () => {

  const navigate = useNavigate(); 

  const navStyleLink = ()=>{
    return{
      marginTop: "20px",
      textAlign: "center",
      cursor: "pointer",
      textDecoration: "none",
      color:"black"
    }
  }
  const [credentials, setCredentials] = useState([
    { userEmail: "", userPassword: "" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const loginUser = ()=>{
    if(credentials.userEmail == ""){
      window.alert("Please enter your email");
      return;
    }else if(credentials.userPassword == ""){
      window.alert("Please enter your password");
      return;
    }

    const mainUrl = "https://movieventure.xyz";
    
    fetch(`${mainUrl}/userlogin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        if (response.status === 200) {
          window.alert('Login successfully');
          localStorage.setItem("userEmail", credentials.userEmail);
          setCredentials({
            userEmail: "",
            userPassword:""
          });
          navigate('/');
        } else {
          window.alert('Login Failed!');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  return (
    <>
    <div id="loginDiv">
    <Link to={'/'}><img src={require('../Assets/logo.jpg')} /></Link>
    <h2>Welcome To Movie Venture</h2>
    <input value={credentials.userEmail} onChange={handleChange} name="userEmail" placeholder="Enter Email" type={"email"}/>
    <input value={credentials.userPassword} onChange={handleChange} name="userPassword"  placeholder="Enter Password" type={"password"}/>
    <button onClick={loginUser}>Log In</button>
    <hr/>
    <NavLink to={'/signup'} style={navStyleLink}><p id="newUser">New User? Sign Up</p></NavLink>
    </div>
    </>
  );
};

export default LogInUser;
