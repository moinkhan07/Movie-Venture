package com.movieventure.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movieventure.DTO.UsersDTO;
import com.movieventure.Exception.UsersException;
import com.movieventure.Model.Users;
import com.movieventure.Repository.UsersRepo;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UsersRepo usersRepo;

	@Override
	public Users registerUser(Users users) throws UsersException {
		Users existingUser = usersRepo.findByUserEmail(users.getUserEmail());
		if (existingUser == null) {
		     return	usersRepo.save(users);
		}
		throw new UsersException("User exist with email " + users.getUserEmail());
	}

	@Override
	public String loginUser(UsersDTO usersDTO) throws UsersException {
		Users existingUsers = usersRepo.findByUserEmail(usersDTO.getUserEmail());
		if (existingUsers.getUserPassword().equals(usersDTO.getUserPassword())) {
			return "User Successfully Logged In";
		}
		throw new UsersException("Wrong Credential");
	}

	@Override
	public List<Users> getAllUserDetails() throws UsersException {
		List<Users> users = usersRepo.findAll();
		if (users == null) {
			throw new UsersException("No user found");
		}
		return users;
	}

}
