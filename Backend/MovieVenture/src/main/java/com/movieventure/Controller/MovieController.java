package com.movieventure.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.movieventure.DTO.AdminDTO;
import com.movieventure.DTO.UsersDTO;
import com.movieventure.Exception.AdminException;
import com.movieventure.Exception.BookmarkException;
import com.movieventure.Exception.MovieException;
import com.movieventure.Exception.UsersException;
import com.movieventure.Model.Admin;
import com.movieventure.Model.Bookmark;
import com.movieventure.Model.Complain;
import com.movieventure.Model.Movies;
import com.movieventure.Model.Users;
import com.movieventure.Repository.MovieRepo;
import com.movieventure.Service.AdminService;
import com.movieventure.Service.BookmarkService;
import com.movieventure.Service.ComplainService;
import com.movieventure.Service.MovieService;
import com.movieventure.Service.UserService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*")
public class MovieController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private BookmarkService bookmarkService;
	
	@Autowired
	private ComplainService complainService;
	
	@Autowired
	private MovieService movieService;
	
	@Autowired
	private MovieRepo movieRepo;
	
//	=================================== User Controller ==================================
	@PostMapping("/users")
	public ResponseEntity<Users> saveUsersHandler(@Valid @RequestBody Users users) throws UsersException{
		Users registeredUser= userService.registerUser(users);		
		return new ResponseEntity<Users>(registeredUser,HttpStatus.ACCEPTED);
		
	}
	
	@PostMapping("/userlogin")
	public ResponseEntity<String> userLogin(@RequestBody UsersDTO users) throws UsersException {
		String result = userService.loginUser(users);
		return new ResponseEntity<String>(result,HttpStatus.OK);
		
	}
	
	@GetMapping("/users/{email}")
	public ResponseEntity<Users> getUserByEmailHandler(@PathVariable("email") String email) throws UsersException{
		Users users = userService.userByUserEmail(email);
		return new ResponseEntity<Users>(users,HttpStatus.OK);
	} 
	
	@GetMapping("/users")
	public ResponseEntity<List<Users>> getAllUsersHandler() throws UsersException{
		List<Users> users= userService.getAllUserDetails();
		return new ResponseEntity<List<Users>>(users,HttpStatus.ACCEPTED);
	} 
	
//	=================================== Admin Controller ==================================
	@PostMapping("/admins")
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) throws AdminException{
		Admin regiteredAdmin = adminService.registerAdmin(admin);
		return new ResponseEntity<Admin>(regiteredAdmin,HttpStatus.CREATED);
	}

	@PostMapping("/adminlogin")
	public ResponseEntity<String> loginAdmin(@RequestBody AdminDTO admin) throws AdminException{
		String result = adminService.loginAdmin(admin);
		return new ResponseEntity<String>(result,HttpStatus.OK);
 	}
	
	@GetMapping("/admins")
	public ResponseEntity<List<Admin>> getAllAdminHandler() throws AdminException{
		List<Admin> admin = adminService.getAllAdminDetails();
		return new ResponseEntity<List<Admin>>(admin,HttpStatus.ACCEPTED);
	} 
	
	
//	=================================== Movie Controller ==================================
	@PostMapping("/movies")
	public ResponseEntity<Movies> addMovieHandler(@RequestBody Movies movies) throws MovieException{
		Movies addMovie = movieService.addMovie(movies);
		return new ResponseEntity<Movies>(addMovie,HttpStatus.CREATED);
	}
	
	@DeleteMapping("/movies/{mId}")
	public ResponseEntity<Movies> deleteMovieHandler(@PathVariable("mId") Integer movieId) throws MovieException{
		Movies deletedMovie = movieService.deleteMovie(movieId);
		return new ResponseEntity<Movies>(deletedMovie,HttpStatus.OK);
	}
	
	@GetMapping("/movies")
	public ResponseEntity<List<Movies>> getAllMoviesHandler() throws MovieException{
		List<Movies> listOfMovies = movieService.getAllMovies();
		return new ResponseEntity<List<Movies>>(listOfMovies,HttpStatus.OK);
	}
	
	@GetMapping("/movies/category/{category}")
	public ResponseEntity<List<Movies>> getMovieByCategoryHandler(@PathVariable("category") String category) throws MovieException{
		List<Movies> moviesByCategory = movieService.getAllMoviesByCategory(category);
		return new ResponseEntity<List<Movies>>(moviesByCategory,HttpStatus.OK);
	}
	
	@GetMapping("/movies/title/{title}")
	public ResponseEntity<List<Movies>> getMovieByTitleHandler(@PathVariable("title") String title) throws MovieException{
		List<Movies> moviesByTitle = movieService.getAllMoviesByTitle(title);
		return new ResponseEntity<List<Movies>>(moviesByTitle,HttpStatus.OK);
	}
	
	@GetMapping("/movies/{mId}")
	public ResponseEntity<Movies> getMovieByMovieIdHandler(@PathVariable("mId") Integer movieId) throws MovieException{
		Movies movie = movieService.getMovieByMovieId(movieId);
		return new ResponseEntity<Movies>(movie,HttpStatus.OK);
	}
	
	
//	=================================== Bookmark Controller ==================================
    @PostMapping("/bookmark/{mId}")
    public ResponseEntity<Bookmark> addMovieToBookmark(
            @PathVariable("mId") Integer movieId,
            @RequestBody Users users) throws BookmarkException {
        
        Movies movie = movieRepo.findByMoviesId(movieId);

        Bookmark addedMovie = bookmarkService.addMovieToBookmark(movie, users);
        return new ResponseEntity<>(addedMovie, HttpStatus.CREATED);
    }

    @GetMapping("/bookmark/{uEmail}")
    public ResponseEntity<List<Movies>> getAllMovies(
            @PathVariable("uEmail") String userEmail) throws BookmarkException {
        
        List<Movies> listOfMoviesInTheBookmarkByUserId = bookmarkService.viewAllMovieByBookmarkId(userEmail);
        return new ResponseEntity<>(listOfMoviesInTheBookmarkByUserId, HttpStatus.OK);
    }

    @DeleteMapping("/bookmark/{bookmarkId}/{movieId}")
    public ResponseEntity<Bookmark> removeMovieFromTheBookmark(
            @PathVariable("bookmarkId") Integer bookmarkId,
            @PathVariable("movieId") Integer movieId) throws BookmarkException {
        
        Bookmark deletedMovie = bookmarkService.deleteMovieFromBookmark(bookmarkId, movieId);
        return new ResponseEntity<>(deletedMovie, HttpStatus.OK);
    }
    
    @GetMapping("/getBookmarkId/{uEmail}")
    public ResponseEntity<Bookmark> getBookmarkByUserEmail(@PathVariable("uEmail") String userEmail){
    	Bookmark bookmark = bookmarkService.getBookmarkByUserEmail(userEmail);
    	return new ResponseEntity<>(bookmark, HttpStatus.OK);
    }
	
//	=================================== Complain Controller ==================================
	@PostMapping("/complains")
	public ResponseEntity<Complain> addComplainHandler(@RequestBody Complain complain){
		Complain addComplain = complainService.addComplain(complain);
		return new ResponseEntity<Complain>(addComplain,HttpStatus.ACCEPTED);
		
	}
	
	@GetMapping("/complains")
	public ResponseEntity<List<Complain>> getAllComplainsHandler(){
		List<Complain> complains = complainService.listOfComplains();
		return new ResponseEntity<List<Complain>>(complains,HttpStatus.ACCEPTED);
	} 
}
