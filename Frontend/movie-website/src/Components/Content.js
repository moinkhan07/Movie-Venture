import React, { useEffect, useState } from 'react';
import MoviePagination from './MoviePagination';
import MovieList from './MovieList';

const Content = () => {
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

  return (
    <>
      <div id="contentMain">
        <MovieList currentPage={currentPage} moviesPerPage={moviesPerPage} movieData={movieData} />
      </div>
      <MoviePagination totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
};

export default Content;
