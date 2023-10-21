import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState,useRef } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {Link,NavLink} from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Call the search function on "Enter" key press
    }
  };

     var items =["Bollywood","Hollywood","Tollywood","Series","Adventure","SciFi","Comedy","Horror","Mystery","Romance","Anime","Adults","Action","Crime","Thriller","Documentary"]
     var stepSize = 50
  const [currentPosition, setCurrentPosition] = useState(0);

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

  return (
    <>
    <div id='navbar'>
        <div id='leftNav'>
          <Link to={'/'} style={{color:"#FEA641",textDecoration:"none"}}><h1 onClick={() => window.location.reload()}>Movie Venture</h1></Link>
          </div>
        <div id='bottomNav'>
            <input id='searchBar' placeholder='Search here...'  onKeyPress={handleKeyPress} ref={searchInputRef} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button id='searchBtn' onClick={handleSearch}> <SearchIcon sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/> </button>
        </div>
        <div id='rightNav'>
          <NavLink style={navStyleLink}  to={'/bookmark'}><button className='rightNavBtn'> <BookmarkIcon  sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/> Bookmark</button></NavLink>
           <NavLink style={navStyleLink}  to={'/login'}><button className='rightNavBtn'>Login</button></NavLink>
        </div>
    </div>
    {/* ====================New Navbar======================================================== */}
     <div id='newNavbar'>
        <div id='newLeftNav'>
          <Link to={'/'} style={{color:"#FEA641",textDecoration:"none"}}><img onClick={() => window.location.reload()} src={require('../Assets/logo.jpg')} /></Link>
          </div>
          
          <div id='newBottomNav'>
            <input id='newSearchBar' placeholder='Search here...'  onKeyPress={handleKeyPress} ref={searchInputRef} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button id='newSearchBtn'  onClick={handleSearch}> <SearchIcon sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/> </button>
          </div>
        
        
          <div id='newRightNav'>
          <NavLink style={navStyleLink}  to={'/bookmark'}><button className='newRightNavBtn'><BookmarkIcon  sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/></button></NavLink>
           <NavLink style={navStyleLink}  to={'/login'}><button className='newRightNavBtn'>Login</button></NavLink>
          </div>
         
       
    </div> 

    {/* ========================================================================= */}
   <div id='optionsMain'>
      <button onClick={handleLeftClick}>
        <ChevronLeftIcon sx={{ backgroundColor: "transparent", color: "black", width: "100%", height: "100%", display: "flex", alignContent: "center" }} />
      </button>
      <div id='options' style={{ transform: `translateX(${currentPosition}px)` }}>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
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
        {items.map((item, index) => (
          <p key={index}>{item}</p>
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