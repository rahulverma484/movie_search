import React from 'react'
import { useGlobalContext } from './context';
import './Movie.css'


  


const Search = () => {
  const {query, setQuery ,error,setError} = useGlobalContext();
  return(
    <section>
<form action="/" onSubmit={(e)=>e.preventDefault()}>
<div className="wrapper">
  <div className="label" >Submit your search</div>
  <div className="searchBar">
    <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" 
    value={query}
     onChange={(e) => setQuery(e.target.value)} 
     />
    
  </div>
</div>
</form>
<div>
  <p>{error.show && setError}</p>
</div>
</section>
  );
};


export default Search