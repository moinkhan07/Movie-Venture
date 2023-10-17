package com.movieventure.Service;

import java.util.List;
import java.util.Optional;

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
		Movies existingMovies = movieRepo.findByMoviesId(movieId);
		if (existingMovies == null) {
			throw new MovieException("Movie does'nt exist with MovieId : "+ movieId);
		}
		movieRepo.delete(existingMovies);
		return existingMovies;
	}

	@Override
	public List<Movies> getAllMovies() throws MovieException {
		return movieRepo.findAll();
	}

	@Override
	public List<Movies> getAllMoviesByCategory(String category) throws MovieException {
		List<Movies> listOMoviesByCategory = movieRepo.findByMovieCategory(category);
		if (listOMoviesByCategory == null) {
			throw new MovieException("No such movies is there with category"+category);
		}
		return listOMoviesByCategory;
	}

	@Override
	public List<Movies> getAllMoviesByTitle(String movieTitle) throws MovieException {
		List<Movies> listOfMoviesByTitle = movieRepo.findByMovieTitle(movieTitle);
		if (listOfMoviesByTitle == null) {
			throw new MovieException("No such movies is there with the title "+movieTitle);
		}
		return listOfMoviesByTitle;
	}

	@Override
	public Movies getMovieByMovieId(Integer movieId) throws MovieException {
		Optional<Movies> optMovie = movieRepo.findById(movieId);
		if (optMovie.isEmpty()) {
			throw new MovieException("No such Movie is there in the database!");
		}
		Movies existingMovies = optMovie.get();
		return existingMovies;
	}

}
