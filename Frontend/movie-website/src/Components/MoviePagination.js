import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

const MoviePagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div id='moviePagination'>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
        size="small"
      />
    </div>
  );
};

export default MoviePagination;
