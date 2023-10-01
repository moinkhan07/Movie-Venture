import './index.css';
import './Style/Navbar.css'
import './Style/MovieList.css'
import './Style/Footer.css'
import './Style/SignUp.css'
import './Style/LogInUser.css'
import './Style/MoviePagination.css'
import Navbar from './Components/Navbar';
import Content from './Components/Content'
import Footer from './Components/Footer';
import MoviePagination from './Components/MoviePagination';
import SignUp from './Components/SignUp';
import LogInUser from './Components/LogInUser';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <MoviePagination/>
      <Footer />
    </div>
  );
}

export default App;
