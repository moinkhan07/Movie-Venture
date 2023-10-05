package com.movieventure.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movieventure.Model.Complain;

@Repository
public interface ComplainRepo extends JpaRepository<Complain, Integer>{

}
