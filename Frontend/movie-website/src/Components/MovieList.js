import React,{useEffect,useState} from 'react';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {Link} from 'react-router-dom';

const MovieList = ({ currentPage, moviesPerPage, movieData }) => {

  const userEmail = localStorage.getItem("userEmail");

  const [userData, setUserData] = useState([]);
    
  const [bookmarkMovieData,setBookmarkMovieData] = useState([]);

  const [bookmarkId,setBookmarkId] = useState();

  const mainUrl = "https://movieventurewebapp.eu-north-1.elasticbeanstalk.com";

  useEffect(() => {
    if (userEmail) {
      const getUserDetail = async () => {
        let res = await fetch(`${mainUrl}/users/${userEmail}`);
        let data = await res.json();
        setUserData(data);
      };
      getUserDetail();
    }
  }, [bookmarkMovieData]);

  const getBookmarkId = async ()=>{
    if(userEmail){
    let res = await fetch(`${mainUrl}/getBookmarkId/${userEmail}`);
    let data = await res.json();
    setBookmarkId(data.bookmarkId);
    }
  }  

  const getAllBookmarkMovies = async () =>{
    if(userEmail){
    let res = await fetch(`${mainUrl}/bookmark/${userEmail}`);
    let data = await res.json();
    setBookmarkMovieData(data);
    }
  }

  useEffect(()=>{
    getAllBookmarkMovies();
    getBookmarkId();
  },[]);
  
  const isMovieBookmarked = (movie) => {
    if (Array.isArray(bookmarkMovieData)) {
      return bookmarkMovieData.some((bookmarkMovie) => bookmarkMovie.moviesId === movie.moviesId);
    }
    return false;
  };

  const handleBookmarkClick = (movie) => {
    if(!userEmail){
      window.alert("Please Login First!");
    }else{
    if (isMovieBookmarked(movie)) {
      // Remove the movie from bookmarks
      fetch(`${mainUrl}/bookmark/${bookmarkId}/${movie.moviesId}`, {
        method: 'DELETE',
      }).then(() => {
        setUserData((prevUserData) => {
          if (prevUserData && prevUserData.bookmarkMovies && prevUserData.bookmarkMovies.bookmarkMovies) {
            return {
              ...prevUserData,
              bookmarkMovies: {
                ...prevUserData.bookmarkMovies,
                bookmarkMovies: prevUserData.bookmarkMovies.bookmarkMovies.filter((id) => id !== movie.moviesId),
              },
            };
          }
          return prevUserData;
        });
  
        // Update bookmarkMovieData immediately by filtering out the removed movie
        setBookmarkMovieData((prevData) => prevData.filter((item) => item.moviesId !== movie.moviesId));
  
        // Update bookmarkId after removing the movie
        getBookmarkId();
      });
    } else {
      // Add the movie to bookmarks
      fetch(`${mainUrl}/bookmark/${movie.moviesId}`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => {
        setUserData((prevUserData) => {
          if (prevUserData && prevUserData.bookmarkMovies && prevUserData.bookmarkMovies.bookmarkMovies) {
            return {
              ...prevUserData,
              bookmarkMovies: {
                ...prevUserData.bookmarkMovies,
                bookmarkMovies: [...prevUserData.bookmarkMovies.bookmarkMovies, movie.moviesId],
              },
            };
          }
          return prevUserData;
        });
  
        // Update bookmarkMovieData immediately by adding the new movie
        setBookmarkMovieData((prevData) => [...prevData, movie]);
  
        // Update bookmarkId after adding the movie
        getBookmarkId();
      });
    }
  }
  };
  

  

  
  



  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  return (
    <>
      {movieData.slice(startIndex, endIndex).map((movie, index) => ( 
        <div className='movieDiv' key={index} >
          <div className="ratingdiv">{movie.movieRating}</div>
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
