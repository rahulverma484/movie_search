
import Home from './Home';
import SingleMovies from './SingleMovies';
import './App.css';
import './Movie.css'
import Error from './Error';
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
 <>
 
 <Routes>
 <Route  path = "/" element = { <Home  /> } />
 <Route  path = "movie/:id" element = { <SingleMovies  /> } />
 { <Route  path = "*" element = { <Error  /> } /> }
 </Routes>
 
 </>
  );
}

export default App;
