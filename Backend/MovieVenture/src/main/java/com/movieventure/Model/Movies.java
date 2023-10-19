package com.movieventure.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Movies {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer moviesId;
	
	private String moviesImageUrl;
	
	private String movieCategory;
		
	private String movieTitle;
	
	private String movieSubtitle; 
	
	private String movie480QualitySize;
	
	private String movie720QualitySize;
	
	private String movie1080QualitySize;
	
	private String movieLatestOrNot;
	
	private String movieDescription;
		
	private String movieReleaseYear;
	
	private String movieRating;
	
	private String movielangaugesAvailable;
	
	private String movieDuration;
		
	private String movie480pVideoLink;
	
	private String movie720pVideoLink;
	
	private String movie1080pVideoLink;
	
	private String imageUrl1;
	
	private String imageUrl2;
	
	private String imageUrl3;
	
	private String imageUrl4;
	
	private String imageUrl5;
	
}