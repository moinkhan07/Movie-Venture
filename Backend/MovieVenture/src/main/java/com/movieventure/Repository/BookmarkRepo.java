package com.movieventure.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movieventure.Model.Bookmark;

@Repository
public interface BookmarkRepo extends JpaRepository<Bookmark, Integer>{
	
	public Bookmark findByBookmarkId(Integer Id);

}
