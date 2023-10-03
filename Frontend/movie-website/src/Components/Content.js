import React, { useState } from 'react';
import MoviePagination from './MoviePagination';
import MovieList from './MovieList';

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const movieData = [
    {
      id:1,
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
      // download:"https://mega.nz/file/yvJk2YAB#c3CLSUV9PU2MZs00wEWw4OjCO4edDGDDV9nRFk4QgfE"
    },
    {
      id:2,
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      id:3,
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      id:4,
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id:5,
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      id:6,
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      id:7,
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id:8,
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      id:9,
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      id:10,
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      id:11,
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id:12,
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      id:13,
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      id:14,
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      id:15,
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      id:16,
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      id:17,
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id:18,
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      id:19,
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      id:20,
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      id:21,
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      id:22,
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      id:23,
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id:24,
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      id:25,
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      id:26,
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      id:27,
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      id:28,
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      id:29,
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id:30,
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      id:31,
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      id:32,
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      id:33,
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      id:34,
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
    {
      id:35,
      title: "Download Inception (2010) Dual Audio Hindi-English 480p [450MB] || 720p [1.3GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
      id:36,
      title: "Download Prometheus (2012) Dual Audio (Hindi-English) Msubs Bluray 480p [450MB] || 720p [1.1GB] || 1080p [2.6GB]",
      imageUrl: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-779968991.jpg"
    },
    {
      id:37,
      title: "Download Avatar 2 The Way of Water (2022) (Hindi-English) BluRay 480p [690MB] || 720p [1.7GB] || 1080p [4.1GB]",
      imageUrl: "https://images.disneymovieinsiders.com/3836ad6fbd0491e0fbe9c3fe2f6786aa/9f684517-cf81-42c9-a85d-51a046ce942d.jpg"
    },
    {
      id:38,
      title: "Download Jawan (2023) (Hindi Clean Audio-Multi Audio) Movie HQ S-Print || 480p [900MB] || 720p [1.6GB] || 1080p [3GB]",
      imageUrl: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg"
    },
    {
      id:39,
      title: "Download Interstellar (2014) Dual Audio (Hindi-English) 480p [600MB] || 720p [1.86GB] || 1080p [2.9GB]",
      imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/08cc4e757e72f5480bcb5002b1d531a99b239b0ba4a5cb3cc9143ae08108e751.jpg"
    },
    {
      id:40,
      title: "Download Oppenheimer (2023) (Hindi Dubbed) V3 HDCAM 480p [530MB] || 720p [1.4GB] || 1080p [3.2GB]",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg"
    },
  ];

  const totalPages = Math.ceil(movieData.length / moviesPerPage);

  return (
    <>
    <div id="contentMain">
      <MovieList currentPage={currentPage} moviesPerPage={moviesPerPage} movieData={movieData} />
    </div>
     <MoviePagination totalPages={totalPages} onPageChange={onPageChange}  />
     </>
  );
};

export default Content;

