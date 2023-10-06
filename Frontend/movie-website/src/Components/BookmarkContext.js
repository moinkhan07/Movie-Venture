import React, { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export function useBookmark() {
  return useContext(BookmarkContext);
}

export function BookmarkProvider({ children }) {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  const toggleBookmark = (movieId) => {
    if (bookmarkedMovies.includes(movieId)) {
      setBookmarkedMovies(bookmarkedMovies.filter((id) => id !== movieId));
    } else {
      setBookmarkedMovies([...bookmarkedMovies, movieId]);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedMovies, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}
