import React from 'react';
import BookmarkIcon from "@mui/icons-material/Bookmark";


const MovieList = () => {
  const movieData = [
    {
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    }
  ];
  

  return (
    <>
      {movieData.map((movie, index) => (
        <div key={index} className='movieDiv' >
            <button className="bookmarkMovie">
            <BookmarkIcon
              sx={{
                backgroundColor: "transparent",
                color: "red",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            />
          </button>
          <p className="bookmarkText">Tap To Bookmark</p>
          <img src={movie.imageUrl} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
    </>
  );
};

export default MovieList;
