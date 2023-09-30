package com.movieventure.Service;

import java.util.List;

import com.movieventure.DTO.AdminDTO;
import com.movieventure.Exception.AdminException;
import com.movieventure.Model.Admin;

public interface AdminService {
	
	public Admin registerAdmin(Admin admin)throws AdminException;
	
	public String loginAdmin(AdminDTO adminDTO) throws AdminException;
	
	public List<Admin> getAllAdminDetails() throws AdminException;

}
