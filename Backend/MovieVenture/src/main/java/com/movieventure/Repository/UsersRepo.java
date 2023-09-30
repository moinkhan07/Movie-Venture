package com.movieventure.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movieventure.Model.Users;

@Repository
public interface UsersRepo extends JpaRepository<Users, Integer>{
	
	public Users findByUserEmail(String userEmail);

}
