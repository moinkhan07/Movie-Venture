package com.movieventure.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.movieventure.Model.Movies;

@Repository
public interface MovieRepo extends JpaRepository<Movies, Integer>{
	
	public Movies findByMoviesId(Integer id);
	
	@Query("Select m from Movies m where m.movieTitle like %:name%")
	public List<Movies> findByMovieTitle(@Param("name") String name);
	
	@Query("Select m from Movies m where m.movieCategory like %:name%")
	public List<Movies> findByMovieCategory(@Param("name") String name);
}
