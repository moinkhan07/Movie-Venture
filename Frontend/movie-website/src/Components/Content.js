import React, { useEffect, useState } from 'react';
import MoviePagination from './MoviePagination';
import MovieList from './MovieList';

const Content = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;
  const [movieData,setMovieData] = useState([]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const getMoviesData = async ()=>{
    let res = await fetch("http://localhost:8000/movies");
    let data = await res.json();
    setMovieData(data);
  }
  useEffect(()=>{
    getMoviesData();
  },[]);
  
  const totalPages = Math.ceil(movieData.length / moviesPerPage);

  const filterMovies = () => {
    if (!searchQuery) {
      return movieData; // If no search query, return all movies
    }
    return movieData.filter((movie) =>
      movie.movieTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredMovieData = filterMovies();

  return (
    <>
      <div id="contentMain">
        {/* <MovieList currentPage={currentPage} moviesPerPage={moviesPerPage} movieData={filterMovies()} /> */}
        {filteredMovieData.length === 0 ? (
          <p style={{
            fontSize: '20px',
            color: 'red',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }} >Not Such Movie Found!</p>
        ) : (
          <MovieList
            currentPage={currentPage}
            moviesPerPage={moviesPerPage}
            movieData={filteredMovieData}
          />
        )}
      </div>
      <MoviePagination totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
};

export default Content;
