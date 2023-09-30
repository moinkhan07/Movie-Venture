package com.movieventure.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movieventure.Exception.BookmarkException;
import com.movieventure.Exception.MovieException;
import com.movieventure.Exception.UsersException;
import com.movieventure.Model.Bookmark;
import com.movieventure.Model.Movies;
import com.movieventure.Model.Users;
import com.movieventure.Repository.BookmarkRepo;
import com.movieventure.Repository.MovieRepo;
import com.movieventure.Repository.UsersRepo;

@Service
public class BookmarkServiceImpl implements BookmarkService{
	
	@Autowired
	private BookmarkRepo bookmarkRepo;
	
	@Autowired
	private UsersRepo usersRepo;
	
	@Autowired
	private MovieRepo movieRepo;

	@Override
	public Bookmark addMovieToBookmark(Integer movieid, Users users) {
		 Bookmark bookmark= bookmarkRepo.findByBookmarkId((users.getBookmarkMovies()).getBookmarkId());
	     Optional<Movies> optMovie = movieRepo.findById(movieid);
	     Movies movie = optMovie.get();
		 bookmark.getListOfMovies().add(movie);
		 return bookmarkRepo.save(bookmark);
	}

	@Override
	public List<Movies> viewAllMovieByBookmarkId(String userEmail) throws BookmarkException {
		Users users= usersRepo.findByUserEmail(userEmail);
		if (users != null) {
		Bookmark bookmark = bookmarkRepo.findByBookmarkId(users.getBookmarkMovies().getBookmarkId());
		List<Movies> listOfMoviesInBookmark = bookmark.getListOfMovies();
		return listOfMoviesInBookmark;
		}else {
			throw new BookmarkException("No Such Bookmark exist!");
		}
	}

	@Override
	public Bookmark deleteMovieFromBookmark(Integer bookmarkId, Integer movieId) throws BookmarkException {
		Optional<Bookmark> optBookmark = bookmarkRepo.findById(bookmarkId);
		if (optBookmark.isEmpty()) {
			throw new BookmarkException("No such bookmark is exist!");
		}else {
			Bookmark existingBookmark = optBookmark.get();
			List<Movies> listOfMovies = existingBookmark.getListOfMovies();
			Optional<Movies> optMovie = movieRepo.findById(movieId);
			listOfMovies.remove(optMovie.get());
			bookmarkRepo.save(existingBookmark);
			return existingBookmark;
		}
	}

}
