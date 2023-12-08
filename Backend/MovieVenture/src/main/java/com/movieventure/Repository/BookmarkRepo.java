package com.movieventure.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.movieventure.Model.Bookmark;

@Repository
public interface BookmarkRepo extends JpaRepository<Bookmark, Integer>{
	
	public Bookmark findByBookmarkId(Integer Id);
	
	@Query("SELECT b FROM Bookmark b WHERE b.user.userEmail = :userEmail")
	public Bookmark findBookmarkIdByUserEmail(@Param("userEmail") String userEmail);

}
