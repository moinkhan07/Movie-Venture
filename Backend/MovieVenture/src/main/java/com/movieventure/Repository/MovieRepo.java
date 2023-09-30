package com.movieventure.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movieventure.Model.Movies;

@Repository
public interface MovieRepo extends JpaRepository<Movies, Integer>{
	
	public Movies findByMovieId(Integer id);

}
