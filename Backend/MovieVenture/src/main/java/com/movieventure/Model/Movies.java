package com.movieventure.Model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movies {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer movieId;
	
	private String movieImageUrl;
	
	private String movieCategory;
		
	private String movieTitle;
	
	private String movieSubtitle; 
	
	private String movieQuality;
	
	private String movieLatestOrNot;
	
	private String movieDescription;
		
	private String movieReleaseYear;
	
	private String movieRating;
	
	private String movielangaugesAvailable;
	
	private String movieDuration;
	
	private List<String> listOfMoviesImages = new ArrayList<>();
	
	private String movie480pVideoLink;
	
	private String movie720pVideoLink;
	
	private String movie1080pVideoLink;
	
	
}
