package com.movieventure.Service;

import java.util.List;

import com.movieventure.Model.Complain;

public interface ComplainService {
	
	public Complain addComplain(Complain complain);
	
	public List<Complain> listOfComplains();

}
