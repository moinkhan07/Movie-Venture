package com.movieventure.Service;

import java.util.List;

import com.movieventure.DTO.UsersDTO;
import com.movieventure.Exception.UsersException;
import com.movieventure.Model.Users;

public interface UserService {
	
	public Users registerUser(Users users)throws UsersException;
	
	public String loginUser(UsersDTO usersDTO) throws UsersException;
	
	public List<Users> getAllUserDetails() throws UsersException;

}
