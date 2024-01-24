import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Movie = () => {
    const { movieId} = useParams();  // we can use currentPage in the brackets {} 
    const [data,setData] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    const mainUrl = "http://movieventurewebapp.eu-north-1.elasticbeanstalk.com";

    const getMovieData = async ()=>{
      let res = await fetch(`${mainUrl}/movies/${movieId}`);
      let data = await res.json();
      setData(data);
    }
    useEffect(() => {
      getMovieData();
    }, [movieId]);

    useEffect(() => {
      const fetchRecommendedMovies = async () => {
        let res = await fetch(`${mainUrl}/movies`);
        let recommendedMoviesData = await res.json();
  
        const filteredRecommendedMovies = recommendedMoviesData.filter(
          recommendedMovie => recommendedMovie.movieTitle !== data.movieTitle
        );
  
        setRecommendedMovies(filteredRecommendedMovies);
      };
  
      fetchRecommendedMovies();
    }, [data.moviesId]);

    const handleRecommendedMovieClick = (movie) => {
      setData(movie);
    };

    const handleDownload480p = () => {
      window.open(data.movie480pVideoLink, '_blank');
    };

    const handleDownload720p = () => {
      window.open(data.movie720pVideoLink, '_blank');
    };
    
    const handleDownload1080p = () => {
      window.open(data.movie1080pVideoLink, '_blank');
    };
  
      
  return (
    <>
    <div id='movieInfoMain'>
        <div id='movieInfoLeft'>
          <h2>{`Download ${data.movieTitle} (${data.movieReleaseYear}) (${data.movielangaugesAvailable}) ${data.movie480QualitySize} || ${data.movie720QualitySize} || ${data.movie1080QualitySize}`}</h2>
          <div id='selectedMovieDetails'>
            <div id='selectedMovieImage'>
               <img src={data.moviesImageUrl} alt={data.movieTitle} />
            </div>
            <div id='selectedMovieInfo'>
              <p><b style={{color:"#FEA641"}}> Title:</b> {data.movieTitle} </p>
              <p><b style={{color:"#FEA641"}}> Duration:</b> {data.movieDuration}</p>
              <p><b style={{color:"#FEA641"}}> Release Year:</b> {data.movieReleaseYear}</p>
              <p><b style={{color:"#FEA641"}}> Quality Available:</b> 480p, 720p and 1080p</p>
              <p><b style={{color:"#FEA641"}}> Langauge Available:</b> {data.movielangaugesAvailable}</p>
              <p><b style={{color:"#FEA641"}}> Subtitle:</b> {data.movieSubtitle}</p>
              <p><b style={{color:"#FEA641"}}> Rating:</b> {data.movieRating} / 5</p>
              <p><b style={{color:"#FEA641"}}> Category:</b> {data.movieCategory}</p>
              <p><b style={{color:"#FEA641"}}> Summary:</b> {data.movieDescription}</p>
            </div>
          </div>
          <h2 id='screenshotsHeading'>Screenshots: </h2>
          <div id='screenshotsImagesDiv'>
            <div className='screenshotsImages'> <img src={data.imageUrl1} alt={data.movieTitle} /></div>
            <div className='screenshotsImages'> <img src={data.imageUrl2} alt={data.movieTitle} /></div>
            <div className='screenshotsImages'> <img src={data.imageUrl3} alt={data.movieTitle} /></div>
            <div className='screenshotsImages'> <img src={data.imageUrl4} alt={data.movieTitle} /></div>
            <div className='screenshotsImages'> <img src={data.imageUrl5} alt={data.movieTitle} /></div>
          </div>
          <h2 id='downloadHeading'>Download Links: </h2>
          <div id='downloadLinks'>
              <div>
                <p>{`Download ${data.movieTitle} (${data.movieReleaseYear}) (${data.movielangaugesAvailable}) ${data.movie480QualitySize}`}</p>
                <button onClick={handleDownload480p}>Download</button>
              </div>
              <div>
                <p>{`Download ${data.movieTitle} (${data.movieReleaseYear}) (${data.movielangaugesAvailable}) ${data.movie720QualitySize}`}</p>
                <button onClick={handleDownload720p}>Download</button>
              </div>
              <div>
                <p>{`Download ${data.movieTitle} (${data.movieReleaseYear}) (${data.movielangaugesAvailable}) ${data.movie1080QualitySize}`}</p>
                <button onClick={handleDownload1080p}>Download</button>
              </div>
            </div>
        </div>
        <div id='movieInfoRight'>
          <div id='recommededMovieTitle'>
          <p>Recommeded Movies</p>
          </div>
          <div id='movieRecommededAppend'>
             {recommendedMovies.map(recommendedMovie => (
              <div
                key={recommendedMovie.moviesId}
                className="movieRecommeded"
                onClick={() => handleRecommendedMovieClick(recommendedMovie)}
              >
                <p>{`${recommendedMovie.movieTitle} (${recommendedMovie.movieReleaseYear}) (${recommendedMovie.movielangaugesAvailable}) ${recommendedMovie.movie480QualitySize} || ${recommendedMovie.movie720QualitySize} || ${recommendedMovie.movie1080QualitySize}`}</p>
              </div>
            ))}

          </div>
        </div>
    </div>
    </>
  );
};

export default Movie;
