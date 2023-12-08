package com.movieventure.Model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bookmark {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer bookmarkId;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private Users user;
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy = "bookmark")
	@JsonIgnore
    private List<BookmarkMovies> bookmarkMovies = new ArrayList<>();

}
