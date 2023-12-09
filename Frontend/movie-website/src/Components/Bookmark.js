import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { usePageContext } from './PageContext';

const Bookmark = () => {
  const { currentPage } = usePageContext();

  const userEmail = localStorage.getItem("userEmail");

  const [userData, setUserData] = useState([]);

  const [bookmarkId,setBookmarkId] = useState();

  const [bookmarkMovieData,setBookmarkMovieData] = useState([]);

  useEffect(() => {
    if (userEmail) {
      const getUserDetail = async () => {
        let res = await fetch(`http://localhost:8000/users/${userEmail}`);
        let data = await res.json();
        setUserData(data);
      };
      getUserDetail();
    }
  }, [bookmarkMovieData]);

  const getBookmarkId = async ()=>{
    if(userEmail){
    let res = await fetch(`http://localhost:8000/getBookmarkId/${userEmail}`);
    let data = await res.json();
    setBookmarkId(data.bookmarkId);
    }
  }  

  const getAllBookmarkMovies = async () =>{
    if(userEmail){
    let res = await fetch(`http://localhost:8000/bookmark/${userEmail}`);
    let data = await res.json();
    setBookmarkMovieData(data);
    }
  }

  useEffect(()=>{
    getAllBookmarkMovies();
    getBookmarkId();
  },[]);

  const isMovieBookmarked = (movie) => {
    if (Array.isArray(bookmarkMovieData)) {
      return bookmarkMovieData.some((bookmarkMovie) => bookmarkMovie.moviesId === movie.moviesId);
    }
    return false;
  };

  const handleBookmarkClick = (movie) => {
    if (userEmail) {
    if (isMovieBookmarked(movie)) {
      fetch(`http://localhost:8000/bookmark/${bookmarkId}/${movie.moviesId}`, {
        method: 'DELETE',
      }).then(() => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          bookmarkMovies: {
            ...prevUserData?.bookmarkMovies,
            bookmarkMovies: prevUserData?.bookmarkMovies?.bookmarkMovies?.filter((item) => item.moviesId !== movie.moviesId) || [],
          },
        }));
  
        setBookmarkMovieData((prevData) => prevData.filter((item) => item.moviesId !== movie.moviesId));
      });
    }
  }
  };
  
  


  return (
    <>
     <h2 style={{ color: 'white', textAlign: 'center', fontSize: '24px', marginTop: '10px' }}>Bookmark Movies</h2>
      <div id='contentMain'>
        {bookmarkMovieData.length > 0 ? ( // Check if there are bookmarked movies
          bookmarkMovieData.map((movie, index) => (
            <div className='movieDiv' key={index}>
              <button className='bookmarkMovie' onClick={() => handleBookmarkClick(movie)}>
                <BookmarkIcon
                  sx={{
                    backgroundColor: 'transparent',
                    color: isMovieBookmarked(movie) ? 'green' : 'red',
                    fontSize: '40px',
                    fontWeight: 'bold',
                  }}
                />
              </button>
              <p className='bookmarkText' style={{ backgroundColor: isMovieBookmarked(movie) ? 'green' : 'red' }}>
                {isMovieBookmarked(movie) ? 'Tap To Remove from Bookmark' : 'Tap To Bookmark'}
              </p>
              <Link to={`/movie/${movie.moviesId}/page/${currentPage}`} style={{ textDecoration: 'none' }}>
                <img src={movie.moviesImageUrl} alt={movie.movieTitle} />
                <p>{`Download ${movie.movieTitle} (${movie.movieReleaseYear}) (${movie.movielangaugesAvailable}) ${movie.movie480QualitySize} || ${movie.movie720QualitySize} || ${movie.movie1080QualitySize}`}</p>
              </Link>
            </div>
          ))
        ) : (
          <h2 style={{
            color: 'red',
            textAlign: 'center',
            position: 'absolute',
            top: '170px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>Your Bookmarks Are Currently Empty!</h2>
        )}
      </div>
    </>
  )
}

export default Bookmark