import React,{useEffect,useState} from 'react';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useBookmark } from './BookmarkContext';
import {Link} from 'react-router-dom';


const MovieList = ({ currentPage, moviesPerPage, movieData }) => {
  const { bookmarkedMovies, toggleBookmark } = useBookmark();

  const userEmail = localStorage.getItem("userEmail");
  const [bookmarkId,setBookmarkId] = useState(0);
  console.log(bookmarkId);
  useEffect(() => {
    if (userEmail) {
      const getUserDetail = async () => {
        let res = await fetch(`http://localhost:8000/users/${userEmail}`);
        let data = await res.json();
        if (data && data.bookmarkMovies.bookmarkId) {
          setBookmarkId(data.bookmarkMovies.bookmarkId);
        }
        console.log(data);
      };
      getUserDetail();
    }
  }, [userEmail]);


  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  return (
    <>
      {movieData.slice(startIndex, endIndex).map((movie, index) => ( 
        <div className='movieDiv' key={index} >
          <button className="bookmarkMovie" onClick={() => toggleBookmark(movie.moviesId)}>
            <BookmarkIcon
              sx={{
                backgroundColor: "transparent",
                color: bookmarkedMovies.includes(movie.moviesId) ? 'green' : 'red',
                fontSize: "40px",
                fontWeight: "bold",
              }}
            />
          </button>
          <p className="bookmarkText" style={{ backgroundColor: bookmarkedMovies.includes(movie.moviesId) ? 'green' : 'red' }}>
          {bookmarkedMovies.includes(movie.moviesId) ? 'Tap To Remove from Bookmark' : 'Tap To Bookmark'}
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
