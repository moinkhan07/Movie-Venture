package com.movieventure.Model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
	
	private String movieQuality;
	
	private String movieLatestOrNot;
	
	private String movieDescription;
		
	private String movieReleaseYear;
	
	private String movieRating;
	
	private String movielangaugesAvailable;
	
	private String movieDuration;
		
	private String movie480pVideoLink;
	
	private String movie720pVideoLink;
	
	private String movie1080pVideoLink;
	
	@OneToMany(mappedBy = "movie",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private List<MovieImages> listOfPicturesImages = new ArrayList<>();
	
}