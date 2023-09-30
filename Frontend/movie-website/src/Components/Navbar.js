import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Navbar = () => {
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
  return (
    <>
    <div id='navbar'>
        <div id='leftNav'><h1>Movie Venture</h1></div>
        <div id='bottomNav'>
            <input id='searchBar' placeholder='Search here...' />
            <button id='searchBtn'> <SearchIcon sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/> </button>
        </div>
        <div id='rightNav'>
            <button className='rightNavBtn'> <BookmarkIcon  sx={{ backgroundColor:"transparent",color:"white",fontSize:"28px",fontWeight:"bold" }}/> Bookmark</button>
            <button className='rightNavBtn'>Register</button>
            <button className='rightNavBtn'>Login</button>
        </div>
    </div>
   <div id='optionsMain'>
      <button onClick={handleLeftClick}>
        <ChevronLeftIcon sx={{ backgroundColor: "transparent", color: "white", width: "100%", height: "100%", display: "flex", alignContent: "center" }} />
      </button>
      <div id='options' style={{ transform: `translateX(${currentPosition}px)` }}>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <button onClick={handleRightClick}>
        <ChevronRightIcon sx={{ backgroundColor: "transparent", color: "white", width: "100%", height: "100%", display: "flex", alignContent: "center" }} />
      </button>
    </div>
    </>
  )
}

export default Navbar