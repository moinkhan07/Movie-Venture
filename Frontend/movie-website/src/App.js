import './index.css';
import './Style/Navbar.css'
import './Style/NewNavbar.css'
import './Style/MovieList.css'
import './Style/Footer.css'
import './Style/SignUp.css'
import './Style/LogInUser.css'
import './Style/NewOptions.css'
import './Style/MoviePagination.css'
import './Style/Movie.css'
import Navbar from './Components/Navbar';
import Content from './Components/Content'
import Footer from './Components/Footer';
import Bookmark from './Components/Bookmark';
import LogInUser from './Components/LogInUser' 
import SignUp from './Components/SignUp';
import Movie from './Components/Movie';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={[<Navbar/>,<Content/>,<Footer/>]} />
      <Route path='bookmark' element={[<Navbar/>,<Bookmark/>]} />
      <Route path='login' element={<LogInUser />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='movie/:movieId/page/:currentPage' element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
