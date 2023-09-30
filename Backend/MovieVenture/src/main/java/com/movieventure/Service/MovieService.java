package com.movieventure.Service;

import com.movieventure.Exception.MovieException;
import com.movieventure.Model.Movies;

public interface MovieService {
	
	public Movies addMovie(Movies movies);
	
	public Movies deleteMovie(Integer movieId)throws MovieException;

}
