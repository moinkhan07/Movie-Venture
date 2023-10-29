import React, { useState} from 'react';
import './index.css';
import './Style/Navbar.css'
import './Style/NewNavbar.css'
import './Style/MovieList.css'
import './Style/SignUp.css'
import './Style/LogInUser.css'
import './Style/NewOptions.css'
import './Style/MoviePagination.css'
import './Style/Movie.css'
import './Style/Complain.css'
import './Style/ComplainBox.css'
import Navbar from './Components/Navbar';
import Content from './Components/Content'
import Bookmark from './Components/Bookmark';
import LogInUser from './Components/LogInUser' 
import SignUp from './Components/SignUp';
import Movie from './Components/Movie';
import Complain from './Components/Complain';
import ComplainBox from './Components/ComplainBox';
import {Routes,Route} from 'react-router-dom'
import  {PageProvider} from './Components/PageContext';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to store the search query
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (query) => {
    setSearchQuery(query); // Function to update the search query state
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Function to update the selected category state
  };

  // [<Navbar onSearch={handleSearch} />,<Content searchQuery={searchQuery} />]

  return (
    <PageProvider>
    <div className="App">
      <Complain />
      <Routes>
      <Route path='/' element={ [
              <Navbar onSearch={handleSearch} onSelectCategory={handleCategoryChange} />,
              <Content searchQuery={searchQuery} selectedCategory={selectedCategory} />
            ]} />
      <Route path='bookmark' element={[<Navbar onSearch={handleSearch} />,<Bookmark/>]} />
      <Route path='login' element={<LogInUser />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='movie/:movieId/page/:currentPage' element={<Movie />} />
      <Route path='complain' element={[<Navbar onSearch={handleSearch} /> ,<ComplainBox />]}/>
      </Routes>
    </div>
    </PageProvider>
  );
}

export default App;
