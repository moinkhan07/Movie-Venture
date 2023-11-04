import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState,useRef,useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link,NavLink,useNavigate} from 'react-router-dom';

const Navbar = ({ onSearch , onSelectCategory}) => {
  const userEmail = localStorage.getItem("userEmail");
  const [userName,setUserName] = useState("");
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  useEffect(() => {
    if (userEmail) {
      const getUserDetail = async () => {
        let res = await fetch(`http://localhost:8000/users/${userEmail}`);
        let data = await res.json();
        if (data && data.firstName) {
          setUserName(data.firstName);
        }
      };
      getUserDetail();
    }
  }, [userEmail]);

  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate(); 

  const handleSearch = () => {
    onSearch(searchQuery);
    navigate('/');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Call the search function on "Enter" key press
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);
    if (inputValue === '') {
      // Automatically trigger the search when the input is cleared
      onSearch('');
      navigate('/');
    }
  };

     var items =["All","Action","Adult","Adventure", "Anime", "Comedy", "Crime", "Documentary", "Fantasy","Heist", "Horror","JungleAdventure", "Mystery", "Romance", "SciFi","SpaceAdventure", "Sports", "SuperHero","Survival", "Thriller", "TimeTravel" ,"War","Zombie"]
     var stepSize = 75
  const [currentPosition, setCurrentPosition] = useState(0);

  const handleCategoryChange = (category) => {
    onSelectCategory(category);
    navigate('/');
  };

  const handleRightClick = () => {
    const maxPosition = -((items.length - 1) * stepSize);
    if (currentPosition > maxPosition) {
      setCurrentPosition(currentPosition - stepSize);
    }
  };

  const handleLeftClick = () => {
    if (currentPosition < 0) {
      setCurrentPosition(currentPosition + stepSize);
    }
  };

  const navStyleLink = ({isActive})=>{
    return{
      width:"35%",
      height: "40px",
      borderRadius: "10px",
      fontSize: "18px",
      outline: "none",
      border: "none",
      backgroundColor:"rgb(122, 129, 131)",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      textDecoration:isActive ? "none" : "none",
    }
  }

  const handleLogout = () => {
    // Perform logout actions, such as removing the userEmail from local storage.
    localStorage.removeItem('userEmail');
    setUserName('');
    setShowLogoutButton(false); // Hide the logout button
  };
  
  return (
    <>
    <div id='navbar'>
        <div id='leftNav'>
          <Link to={'/'} style={{color:"#FEA641",textDecoration:"none"}}><h1 >Movie Venture</h1></Link>
          </div>
        <div id='bottomNav'>
            <input id='searchBar' placeholder='Search here...'  onKeyPress={handleKeyPress} ref={searchInputRef} value={searchQuery} onChange={handleInputChange} />
            <button id='searchBtn' onClick={handleSearch}> <SearchIcon sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/> </button>
        </div>
        <div id='rightNav'>
          <NavLink style={navStyleLink}  to={'/bookmark'}><button className='rightNavBtn'> <BookmarkIcon  sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/> Bookmark</button></NavLink>
           {/* {userEmail ? (
            <NavLink style={navStyleLink} to="">
            <button className="rightNavBtn">{userName}</button>
          </NavLink>
          ) : (
            <NavLink style={navStyleLink} to="/login">
              <button className="rightNavBtn">Login</button>
            </NavLink>
          )} */}
          {userEmail ? (
  <NavLink style={navStyleLink} to="">
    <button
      className="rightNavBtn"
      onClick={() => setShowLogoutButton((prevState) => !prevState)}
    >
      {userName}
    </button>
    {showLogoutButton && (
      <button id="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    )}
  </NavLink>
) : (
  <NavLink style={navStyleLink} to="/login">
    <button className="rightNavBtn">Login</button>
  </NavLink>
)}
        </div>
    </div>
    {/* ====================New Navbar======================================================== */}
     <div id='newNavbar'>
        <div id='newLeftNav'>
          <Link to={'/'} style={{color:"#FEA641",textDecoration:"none"}}><img src={require('../Assets/logo.jpg')} alt="Logo" /></Link>
          </div>
          
          <div id='newBottomNav'>
            <input id='newSearchBar' placeholder='Search here...'  onKeyPress={handleKeyPress} ref={searchInputRef} value={searchQuery} onChange={handleInputChange}/>
            <button id='newSearchBtn'  onClick={handleSearch}> <SearchIcon sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/> </button>
          </div>
        
           <div id='newRightNav'>
          <NavLink style={navStyleLink}  to={'/bookmark'}><button className='newRightNavBtn'> <BookmarkIcon  sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/></button></NavLink>
          {userEmail ? (
  <NavLink style={navStyleLink} to="">
    <button
      className="newRightNavBtn"
      onClick={() => setShowLogoutButton((prevState) => !prevState)}
    >
      {userName}
    </button>
    {showLogoutButton && (
      <button id="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    )}
  </NavLink>
) : (
  <NavLink style={navStyleLink} to="/login">
    <button className="newRightNavBtn">Login</button>
  </NavLink>
)}
        </div>
         
       
    </div> 

    {/* ========================================================================= */}
   <div id='optionsMain'>
      <button onClick={handleLeftClick}>
        <ChevronLeftIcon sx={{ backgroundColor: "transparent", color: "black", width: "100%", height: "100%", display: "flex", alignContent: "center" }} />
      </button>
      <div id='options' style={{ transform: `translateX(${currentPosition}px)` }}>
        {items.map((item, index) => (
          <p key={index} onClick={() => handleCategoryChange(item)}>{item}</p>
        ))}
      </div>
      <button onClick={handleRightClick}>
        <ChevronRightIcon sx={{ backgroundColor: "transparent", color: "black", width: "100%", height: "100%", display: "flex", alignContent: "center" }} />
      </button>
    </div>


    <div id='newOptionsMain'>
      <button onClick={handleLeftClick}>
        <ChevronLeftIcon sx={{ backgroundColor: "transparent", color: "black", width: "100%", height: "100%", display: "flex", alignContent: "center" }} />
      </button>
      <div id='newOptions' style={{ transform: `translateX(${currentPosition}px)` }}>
        {items.map((it, i) => (
          <p key={i} onClick={() => handleCategoryChange(it)}>{it}</p>
        ))}
      </div>
      <button onClick={handleRightClick}>
        <ChevronRightIcon sx={{ backgroundColor: "transparent", color: "black", width: "100%", height: "100%", display: "flex", alignContent: "center" }} />
      </button>
    </div>
    </>
  )
}

export default Navbar