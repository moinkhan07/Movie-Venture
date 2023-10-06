package com.movieventure.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Complain {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer complainId;
	
	private String complainMessage;

}
