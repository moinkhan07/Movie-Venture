import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const Movie = () => {
    const { movieId, currentPage } = useParams();
  const fileID = "";

  return (
    <div id='MovieInfoMain'>
        <Navbar/>
        <h1> Movie ID:{movieId}</h1>
        <h1>Page Number:{currentPage}</h1>
        {/* <video id='videoTag' controls>
        <source src={`https://drive.google.com/uc?export=download&id=${fileID}`} type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Movie;
