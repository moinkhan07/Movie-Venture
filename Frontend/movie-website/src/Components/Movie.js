import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';

const Movie = () => {
    const { movieId, currentPage } = useParams();
    const [data,setData] = useState([]);

    const getMovieData = async ()=>{
      let res = await fetch(`http://localhost:8000/movies/${movieId}`);
      let data = await res.json();
      setData(data);
    }
    useEffect(()=>{
      getMovieData();
    },[]);

    
  return (
    <>
    <Navbar/>
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
                <p>480p</p>
                <p>[900MB]</p>
              </div>
              <div>
                <p>720p</p>
                <p>[1.6GB]</p>
              </div>
              <div>
                <p>1080p</p>
                <p>[3GB]</p>
              </div>
            </div>
        </div>
        <div id='movieInfoRight'>
          <div id='recommededMovieTitle'>
          <p>Recommeded Movies</p>
          </div>
          <div id='movieRecommededAppend'>
          <div className='movieRecommeded'>
              <p>Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]</p>
          </div>
          <div className='movieRecommeded'>
              <p>Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]</p>
          </div>
          <div className='movieRecommeded'>
              <p>Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]</p>
          </div>
          <div className='movieRecommeded'>
              <p>Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]</p>
          </div>
          <div className='movieRecommeded'>
              <p>Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]</p>
          </div>
          <div className='movieRecommeded'>
              <p>Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]</p>
          </div>
          <div className='movieRecommeded'>
              <p>Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]</p>
          </div>


          </div>
        </div>
    </div>
    </>
  );
};

export default Movie;
