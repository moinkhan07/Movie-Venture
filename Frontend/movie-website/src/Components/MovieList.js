import React from 'react';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useBookmark } from './BookmarkContext';
import {Link} from 'react-router-dom';

const MovieList = ({ currentPage, moviesPerPage, movieData }) => {
  const { bookmarkedMovies, toggleBookmark } = useBookmark();

  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  return (
    <>
      {movieData.slice(startIndex, endIndex).map((movie, index) => ( 
        <div className='movieDiv' key={index} >
          <button className="bookmarkMovie" onClick={() => toggleBookmark(movie.id)}>
            <BookmarkIcon
              sx={{
                backgroundColor: "transparent",
                color: bookmarkedMovies.includes(movie.id) ? 'green' : 'red',
                fontSize: "40px",
                fontWeight: "bold",
              }}
            />
          </button>
          <p className="bookmarkText" style={{ backgroundColor: bookmarkedMovies.includes(movie.id) ? 'green' : 'red' }}>
          {bookmarkedMovies.includes(movie.id) ? 'Tap To Remove from Bookmark' : 'Tap To Bookmark'}
           </p>
           <Link to={`/movie/${movie.id}/page/${currentPage}`} style={{ textDecoration: "none" }}>
            <img src={movie.imageUrl} alt={movie.title} />
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MovieList;
