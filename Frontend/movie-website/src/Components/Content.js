import React, { useEffect, useState } from 'react';
import MoviePagination from './MoviePagination';
import MovieList from './MovieList';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const Content = ({ searchQuery, selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;
  const [movieData,setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // const mainUrl = "https://api.movieventure.xyz/api";
  const mainUrl = "http://localhost:8080";

  const getMoviesData = async () => {
    try {
      let res = await fetch(`${mainUrl}/movies`);
      let data = await res.json();
      setMovieData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };
  
  useEffect(()=>{
    getMoviesData();
  },[]);

  useEffect(()=>{
    getMoviesByCategory();
  },[selectedCategory])

  const getMoviesByCategory = async () => {
    setLoading(true);

    if (selectedCategory !== "All") {
      try {
        let res = await fetch(`${mainUrl}/movies/category/${selectedCategory}`);
        let data = await res.json();
        setMovieData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies by category:', error);
        setLoading(false);
      }
    } else {
      getMoviesData();
    }
  };
  
  const totalPages = Math.ceil(movieData.length / moviesPerPage);

  const filterMovies = () => {
    if (!searchQuery) {
      return movieData; 
    }
    return movieData.filter((movie) =>
      movie.movieTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredMovieData = filterMovies();

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;


  return (
    <>
      {/* <div id="contentMain">
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
      </div> */}
       <div id="contentMain">
        {loading ? (
          <div style={{
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop:'50px'
          }}>
            {/* Use the ClipLoader from react-spinners */}
            <ClipLoader color="#FEA641" loading={loading} css={override} size={50} />
          </div>
        ) : filteredMovieData.length === 0 ? (
          <p style={{
            fontSize: '20px',
            color: 'red',
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop:'50px'
          }}>No such movie found!</p>
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
