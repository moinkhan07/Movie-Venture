package com.movieventure.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movieventure.DTO.AdminDTO;
import com.movieventure.Exception.AdminException;
import com.movieventure.Exception.UsersException;
import com.movieventure.Model.Admin;
import com.movieventure.Model.Users;
import com.movieventure.Repository.AdminRepo;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	private AdminRepo adminRepo;

	@Override
	public Admin registerAdmin(Admin admin) throws AdminException {
		Admin existingAdmin = adminRepo.findByAdminEmail(admin.getAdminEmail());
		if (existingAdmin == null) {
		     return	adminRepo.save(admin);
		}
		throw new AdminException("Admin exist with email " + admin.getAdminEmail());
	}

	@Override
	public String loginAdmin(AdminDTO adminDTO) throws AdminException {
		Admin existingAdmin = adminRepo.findByAdminEmail(adminDTO.getAdminEmail());
		if (existingAdmin.getAdminPassword().equals(adminDTO.getAdminPassword())) {
			return "Admin Successfully Logged In";
		}
		throw new AdminException("Wrong Credential");
	}

	@Override
	public List<Admin> getAllAdminDetails() throws AdminException {
		List<Admin> admins = adminRepo.findAll();
		if (admins == null) {
			throw new AdminException("No admin found");
		}
		return admins;
	}

}
