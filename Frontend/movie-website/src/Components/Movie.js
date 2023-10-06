import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const Movie = () => {
    const { movieId, currentPage } = useParams();

  return (
    <div id='MovieInfoMain'>
        <Navbar/>
        <h1> Movie ID:{movieId}</h1>
        <h1>Page Number:{currentPage}</h1>
    </div>
  );
};

export default Movie;
