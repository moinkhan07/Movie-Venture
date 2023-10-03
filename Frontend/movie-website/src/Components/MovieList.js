import React,{useState} from 'react';
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MovieList = ({ currentPage, moviesPerPage, movieData }) => {
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
 
  // Step 1: Create an array of color states, initialized with 'red' for each movie
  const [iconColors, setIconColors] = useState(Array(movieData.length).fill('red'));
  
  // Step 3: Create a function to handle the button click event for each movie
  const handleButtonClick = (index) => {
    // Update the color state for the clicked movie to 'green'
    const newIconColors = [...iconColors];
    newIconColors[index] = newIconColors[index] === 'red' ? 'green' : 'red';
    setIconColors(newIconColors);
  };
  return (
    <>
      {movieData.slice(startIndex, endIndex).map((movie, index) => (
        <div key={index} className='movieDiv' >
            <button className="bookmarkMovie" onClick={()=>handleButtonClick(index)}>
            <BookmarkIcon
              sx={{
                backgroundColor: "transparent",
                color: iconColors[index],
                fontSize: "40px",
                fontWeight: "bold",
              }}
            />
          </button>
          <p className="bookmarkText" style={{ backgroundColor: iconColors[index]}}>
          {iconColors[index] === 'red' ? 'Tap To Bookmark' : 'Tap To Remove from Bookmark'}
          </p>
          <img src={movie.imageUrl} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </>
  );
};

export default MovieList;