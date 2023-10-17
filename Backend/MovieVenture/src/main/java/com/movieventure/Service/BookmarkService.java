package com.movieventure.Service;

import java.util.List;

import com.movieventure.Exception.BookmarkException;
import com.movieventure.Model.Bookmark;
import com.movieventure.Model.Movies;
import com.movieventure.Model.Users;

public interface BookmarkService {

	public Bookmark addMovieToBookmark(Integer movieid, Users users);
	
	public List<Movies> viewAllMovieByBookmarkId(String userEmail) throws BookmarkException;
		
	public Bookmark deleteMovieFromBookmark(Integer bookmarkId,Integer movieId) throws BookmarkException; 

}
