import './index.css';
import './Style/Navbar.css'
import './Style/NewNavbar.css'
import './Style/MovieList.css'
import './Style/Footer.css'
import './Style/SignUp.css'
import './Style/LogInUser.css'
import './Style/Responsive.css'
import './Style/MoviePagination.css'
import Navbar from './Components/Navbar';
import Content from './Components/Content'
import Footer from './Components/Footer';
import Bookmark from './Components/Bookmark';
import LogInUser from './Components/LogInUser' 
import SignUp from './Components/SignUp';
import MoviePagination from './Components/MoviePagination';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={[<Navbar/>,<Content/>,<MoviePagination/>,<Footer/>]} />
      <Route path='bookmark' element={[<Navbar/>,<Bookmark/>]} />
      <Route path='login' element={<LogInUser />} />
      <Route path='signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
