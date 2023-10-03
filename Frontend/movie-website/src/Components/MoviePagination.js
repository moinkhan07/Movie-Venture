import React from 'react';
import Pagination from '@mui/material/Pagination';

const MoviePagination = () => {
  return (
    <div id='moviePagination'>
      <Pagination count={10} color="primary" shape="rounded" size="large"/>
    </div>
  );
};
export default MoviePagination;
