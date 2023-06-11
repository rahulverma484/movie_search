import React from 'react'
import { useGlobalContext } from './context';
import './Movie.css'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie } = useGlobalContext();

  return ( 
  <>
<section className='page-column'>
  <div className='grid grid-4-col-2-row'> 
    {movie.map((curMovie) => {
      return (
        <NavLink to={`movies/${curMovie.imdbID}`} className="movie-link" key={curMovie.imdbID}>
          <div className="movie-card">
            <div className="card-image">
              <img src={curMovie.Poster} alt={curMovie.Title} className='image' />
            </div>
            <div className="card-details">
              <span><strong>{curMovie.Title}</strong> </span>
              
              <span><strong>{curMovie.Year}</strong> </span>
            </div>
          </div>
        </NavLink>
      );
    })} 
  </div>
</section>

</>
  
  )
}

export default Movies