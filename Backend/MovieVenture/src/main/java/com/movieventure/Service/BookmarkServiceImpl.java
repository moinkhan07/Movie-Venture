package com.movieventure.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movieventure.Exception.BookmarkException;
import com.movieventure.Model.Bookmark;
import com.movieventure.Model.BookmarkMovies;
import com.movieventure.Model.Movies;
import com.movieventure.Model.Users;
import com.movieventure.Repository.BookmarkMoviesRepo;
import com.movieventure.Repository.BookmarkRepo;
import com.movieventure.Repository.MovieRepo;
import com.movieventure.Repository.UsersRepo;

@Service
public class BookmarkServiceImpl implements BookmarkService{
	
	@Autowired
	private BookmarkRepo bookmarkRepo;

	@Autowired
	private BookmarkMoviesRepo bookmarkMoviesRepo;
	
	@Autowired
	private UsersRepo usersRepo;
	
	@Autowired
	private MovieRepo movieRepo;

	@Override
	public Bookmark addMovieToBookmark(Movies movie, Users user) {
		Optional<Users> optionalUser = usersRepo.findById(user.getUserId());
		if (optionalUser.isPresent()) {
			Users existingUser = optionalUser.get();

			Bookmark bookmark = existingUser.getBookmarkMovies();
			if (bookmark == null) {
				bookmark = new Bookmark();
				bookmark.setUser(existingUser);
				existingUser.setBookmarkMovies(bookmark);
			}

			BookmarkMovies bookmarkMovie = new BookmarkMovies();
			bookmarkMovie.setBookmark(bookmark);
			bookmarkMovie.setMovies(movie);
			bookmark.getBookmarkMovies().add(bookmarkMovie);

			return bookmarkRepo.save(bookmark);
		} else {
			// Handle the case where the user does not exist
			// You may throw an exception or handle it according to your business logic
			return null;
		}
	}

	@Override
	public List<Movies> viewAllMovieByBookmarkId(String userEmail) throws BookmarkException {
		Users user = usersRepo.findByUserEmail(userEmail);
		if (user != null) {
			Bookmark bookmark = user.getBookmarkMovies();
			if (bookmark != null) {
				List<BookmarkMovies> bookmarkMovies = bookmark.getBookmarkMovies();
				// Extract movies from BookmarkMovies entities
				return bookmarkMovies.stream().map(BookmarkMovies::getMovies).toList();
			} else {
				// Handle the case where the user does not have a bookmark
				// You may throw an exception or handle it according to your business logic
				return List.of();
			}
		} else {
			throw new BookmarkException("User not found with email: " + userEmail);
		}
	}

	@Override
	public Bookmark deleteMovieFromBookmark(Integer bookmarkId, Integer movieId) throws BookmarkException {
	    Optional<Bookmark> optionalBookmark = bookmarkRepo.findById(bookmarkId);
	    if (optionalBookmark.isPresent()) {
	        Bookmark bookmark = optionalBookmark.get();
	        List<BookmarkMovies> bookmarkMovies = bookmark.getBookmarkMovies();
	        
	        // Find the BookmarkMovies entity associated with the movieId
	        Optional<BookmarkMovies> optionalBookmarkMovie = bookmarkMovies.stream()
	                .filter(bm -> bm.getMovies().getMoviesId().equals(movieId))
	                .findFirst();

	        if (optionalBookmarkMovie.isPresent()) {
	            BookmarkMovies bookmarkMovieToDelete = optionalBookmarkMovie.get();
	            bookmarkMovies.remove(bookmarkMovieToDelete);
	            
	            // Delete the specific BookmarkMovies entity from the database
	            bookmarkMoviesRepo.delete(bookmarkMovieToDelete);
	            
	            // Save the updated Bookmark entity
	            bookmarkRepo.save(bookmark);
	            return bookmark;
	        } else {
	            throw new BookmarkException("Movie not found in the bookmark with ID: " + movieId);
	        }
	    } else {
	        throw new BookmarkException("Bookmark not found with ID: " + bookmarkId);
	    }
	}

	@Override
	public Bookmark getBookmarkByUserEmail(String userEmail) {
		Bookmark bookmark = bookmarkRepo.findBookmarkIdByUserEmail(userEmail);
		return bookmark;
	}

}