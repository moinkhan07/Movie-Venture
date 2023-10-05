package com.movieventure.Service;

import java.util.List;

import com.movieventure.Exception.MovieException;
import com.movieventure.Model.Movies;

public interface MovieService {
	
	public Movies addMovie(Movies movies);
	
	public Movies deleteMovie(Integer movieId)throws MovieException;
	
	public List<Movies> getAllMovies() throws MovieException;
	
	public List<Movies> getAllMoviesByCategory(String category) throws MovieException;
	
	public List<Movies> getAllMoviesByTitle(String movieTitle) throws MovieException;
	
	public Movies getMovieByMovieId(Integer movieId) throws MovieException;

}
