import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const usePageContext = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <PageContext.Provider value={{ currentPage, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
