import React,{useEffect,useState} from 'react';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useBookmark } from './BookmarkContext';
import {Link} from 'react-router-dom';

const MovieList = ({ currentPage, moviesPerPage, movieData }) => {
  const { bookmarkedMovies, toggleBookmark } = useBookmark();

  const userEmail = localStorage.getItem("userEmail");

  const [userData, setUserData] = useState([]);
    
  const [bookmarkMovieData,setBookmarkMovieData] = useState([]);

  useEffect(() => {
    if (userEmail) {
      const getUserDetail = async () => {
        let res = await fetch(`http://localhost:8000/users/${userEmail}`);
        let data = await res.json();
        setUserData(data);
      };
      getUserDetail();
    }
  }, [bookmarkMovieData]);


  const getAllBookmarkMovies = async () =>{
    let res = await fetch(`http://localhost:8000/bookmark/${userEmail}`);
    let data = await res.json();
    setBookmarkMovieData(data);
  }

  useEffect(()=>{
    getAllBookmarkMovies();
  },[]);
  
  const isMovieBookmarked = (movie) => {
    return bookmarkMovieData.some((bookmarkMovie) => bookmarkMovie.moviesId === movie.moviesId);
  };

  const handleBookmarkClick = (movie) => {
    if (isMovieBookmarked(movie)) {
      // Remove the movie from bookmarks
      fetch(`http://localhost:8000/bookmark/${userData.bookmarkMovies.bookmarkId}/${movie.moviesId}`, {
        method: 'DELETE',
      }).then(() => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          bookmarkMovies: {
            ...prevUserData.bookmarkMovies,
            listOfMovies: prevUserData.bookmarkMovies.listOfMovies.filter((id) => id !== movie.moviesId),
          },
        }));
  
        // Update bookmarkMovieData immediately by filtering out the removed movie
        setBookmarkMovieData((prevData) => prevData.filter((item) => item.moviesId !== movie.moviesId));
      });
    } else {
      // Add the movie to bookmarks
      fetch(`http://localhost:8000/bookmark/${movie.moviesId}`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          bookmarkMovies: {
            ...prevUserData.bookmarkMovies,
            listOfMovies: [...prevUserData.bookmarkMovies.listOfMovies, movie.moviesId],
          },
        }));
  
        // Update bookmarkMovieData immediately by adding the new movie
        setBookmarkMovieData((prevData) => [...prevData, movie]);
      });
    }
  };
  
  
  



  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  return (
    <>
      {movieData.slice(startIndex, endIndex).map((movie, index) => ( 
        <div className='movieDiv' key={index} >
          <button className="bookmarkMovie" onClick={() => handleBookmarkClick(movie)}>
            <BookmarkIcon
              sx={{
                backgroundColor: "transparent",
                color: isMovieBookmarked(movie) ? 'green' : 'red',
                fontSize: "40px",
                fontWeight: "bold",
              }}
            />
          </button>
          <p className="bookmarkText" style={{ backgroundColor: isMovieBookmarked(movie) ? 'green' : 'red' }}>
            {isMovieBookmarked(movie) ? 'Tap To Remove from Bookmark' : 'Tap To Bookmark'}
          </p>
          <Link to={`/movie/${movie.moviesId}/page/${currentPage}`} style={{ textDecoration: "none" }}>
            <img src={movie.moviesImageUrl} alt={movie.movieTitle} />
            <p>{`Download ${movie.movieTitle} (${movie.movieReleaseYear}) (${movie.movielangaugesAvailable}) ${movie.movie480QualitySize} || ${movie.movie720QualitySize} || ${movie.movie1080QualitySize}`}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieList;
