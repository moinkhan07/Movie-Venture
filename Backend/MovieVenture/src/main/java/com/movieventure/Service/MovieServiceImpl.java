package com.movieventure.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movieventure.Exception.MovieException;
import com.movieventure.Model.Movies;
import com.movieventure.Repository.MovieRepo;

@Service
public class MovieServiceImpl implements MovieService{
	
	@Autowired
	private MovieRepo movieRepo;

	@Override
	public Movies addMovie(Movies movies) {
		return movieRepo.save(movies);
	}

	@Override
	public Movies deleteMovie(Integer movieId) throws MovieException {
		Movies existingMovies = movieRepo.findByMovieId(movieId);
		if (existingMovies == null) {
			throw new MovieException("Movie does'nt exist with MovieId : "+ movieId);
		}
		movieRepo.delete(existingMovies);
		return existingMovies;
	}

}
