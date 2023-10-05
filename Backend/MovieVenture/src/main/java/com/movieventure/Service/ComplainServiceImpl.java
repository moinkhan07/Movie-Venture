package com.movieventure.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movieventure.Model.Complain;
import com.movieventure.Repository.ComplainRepo;

@Service
public class ComplainServiceImpl implements ComplainService{
	
	@Autowired
	private ComplainRepo complainRepo;

	@Override
	public Complain addComplain(Complain complain) {
		return complainRepo.save(complain);
	}

	@Override
	public List<Complain> listOfComplains() {
		return complainRepo.findAll();
	}

}
