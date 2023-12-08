package com.movieventure.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movieventure.Model.BookmarkMovies;

@Repository
public interface BookmarkMoviesRepo extends JpaRepository<BookmarkMovies, Integer>{

}
