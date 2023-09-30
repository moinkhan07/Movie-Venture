package com.movieventure.Exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

import com.movieventure.Model.MyErrorDetails;

@ControllerAdvice
public class GlobalException {
	
	@ExceptionHandler(AdminException.class)  
	public ResponseEntity<MyErrorDetails> adminExceptionHandler(AdminException adminException,WebRequest req){
        
		MyErrorDetails myErr = new MyErrorDetails(LocalDateTime.now(), adminException.getMessage(), req.getDescription(false));
		
		return new ResponseEntity<MyErrorDetails>(myErr,HttpStatus.BAD_REQUEST);
	}
	

	@ExceptionHandler(UsersException.class)  
	public ResponseEntity<MyErrorDetails> usersExceptionHandler(UsersException userException,WebRequest req){
        
		MyErrorDetails myErr = new MyErrorDetails(LocalDateTime.now(), userException.getMessage(), req.getDescription(false));
		
		return new ResponseEntity<MyErrorDetails>(myErr,HttpStatus.BAD_REQUEST);
	}
	

	@ExceptionHandler(BookmarkException.class)  
	public ResponseEntity<MyErrorDetails> bookmarkExceptionHandler(BookmarkException bookmarkException,WebRequest req){
        
		MyErrorDetails myErr = new MyErrorDetails(LocalDateTime.now(), bookmarkException.getMessage(), req.getDescription(false));
		
		return new ResponseEntity<MyErrorDetails>(myErr,HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler (MovieException.class)  
	public ResponseEntity<MyErrorDetails> movieExceptionHandler(MovieException movieException,WebRequest req){
        
		MyErrorDetails myErr = new MyErrorDetails(LocalDateTime.now(), movieException.getMessage(), req.getDescription(false));
		
		return new ResponseEntity<MyErrorDetails>(myErr,HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<MyErrorDetails> myExceptionHandler(Exception exception,WebRequest req){
		
		MyErrorDetails myErr = new MyErrorDetails(LocalDateTime.now(), exception.getMessage(), req.getDescription(false));
		
		return new ResponseEntity<MyErrorDetails>(myErr,HttpStatus.BAD_REQUEST);
		
	}
	
	@ExceptionHandler(NoHandlerFoundException.class)
	public ResponseEntity<MyErrorDetails> mynotFoundHandler(NoHandlerFoundException noHandlerFoundException,WebRequest req)  {
			
	
	MyErrorDetails myErr =new MyErrorDetails(LocalDateTime.now(), noHandlerFoundException.getMessage(), req.getDescription(false));
	
		return new ResponseEntity<>(myErr,HttpStatus.BAD_REQUEST);
					
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<MyErrorDetails> methodArgumentNotValidException(MethodArgumentNotValidException methodArgumentNotValidException,WebRequest req)  {
			
	
		MyErrorDetails myErr=new MyErrorDetails(LocalDateTime.now(), methodArgumentNotValidException.getBindingResult().getFieldError().getDefaultMessage(), req.getDescription(false));
	
		return new ResponseEntity<>(myErr,HttpStatus.BAD_REQUEST);
					
	}
}
