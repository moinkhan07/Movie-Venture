import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import Footer from './Footer';

const Movie = () => {
    const { movieId, currentPage } = useParams();

  return (
    <>
    <Navbar/>
    <div id='movieInfoMain'>
        {/* <h1> Movie ID:{movieId}</h1>
        <h1>Page Number:{currentPage}</h1> */}
        <div id='movieInfoLeft'>
          <h2>Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]</h2>
          <div id='selectedMovieDetails'>
            <div id='selectedMovieImage'>
               <img src='https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg' alt='jawan' />
            </div>
            <div id='selectedMovieInfo'>
              <p><b style={{color:"#FEA641"}}> Title:</b> Jawan</p>
              <p><b style={{color:"#FEA641"}}> Duration:</b> 2hr 49min</p>
              <p><b style={{color:"#FEA641"}}> Release Year:</b> 2023</p>
              <p><b style={{color:"#FEA641"}}> Quality Available:</b> 480p, 720p and 1080p</p>
              <p><b style={{color:"#FEA641"}}> Langauge Available:</b> Hindi</p>
              <p><b style={{color:"#FEA641"}}> Subtitle:</b> No</p>
              <p><b style={{color:"#FEA641"}}> Summary:</b> Jawan shares the story of an Indian individual who endured the harshest torture at the hands of a gang that brutally tormented many pitiful regular people while unable to understand the difference between even a little child. He made the decision not to leave anyone to cause harm to society after escaping from the gang. The remaining plot of this movie concerns how he locates the major antagonist and how he aims to take him out.</p>
            </div>
          </div>
          <h2 id='screenshotsHeading'>Screenshots: </h2>
          <div id='screenshotsImagesDiv'>
            <div className='screenshotsImages'> <img src='https://new2.imgpress.xyz/images/2023/09/07/vlcsnap-2023-09-07-05h53m50s166.jpg' alt='movieScreenshot' /> </div>
            <div className='screenshotsImages'> <img src='https://new2.imgpress.xyz/images/2023/09/07/vlcsnap-2023-09-07-05h49m07s784.jpg' alt='movieScreenshot' /> </div>
            <div className='screenshotsImages'> <img src='https://new2.imgpress.xyz/images/2023/09/07/vlcsnap-2023-09-07-01h21m41s366.jpg' alt='movieScreenshot' /> </div>
            <div className='screenshotsImages'> <img src='https://new2.imgpress.xyz/images/2023/09/07/vlcsnap-2023-09-07-05h22m28s364.jpg' alt='movieScreenshot' /> </div>
            <div className='screenshotsImages'> <img src='https://new2.imgpress.xyz/images/2023/09/07/vlcsnap-2023-09-07-05h37m11s907.jpg' alt='movieScreenshot' /> </div>
          </div>
          <h2 id='downloadHeading'>Download Links: </h2>
          <div id='downloadLinks'>
              <div>480p [900MB]</div>
              <div>720p [1.6GB]</div>
              <div>1080p [3GB]</div>
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
    <Footer/>
    </>
  );
};

export default Movie;
