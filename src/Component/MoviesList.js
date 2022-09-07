import { useCallback, useEffect, useState } from "react";
import "./movieList.css";

const MoviesList = (props) => {
//   const movies = [
//     {
//       id: "m1",
//       title: "Pursuit of Happiness",
//       realease_Date: "05/09/1998",
//     },

//     {
//       id: "m2",
//       title: "The Bolt",
//       realease_Date: "01/05/2005",
//     },
//   ];
const [movies,setMovies] = useState([]);
const [loading,setLoading] = useState(false);
const [error,setError] =useState(null);

useEffect(()=>
{
 movieFetcher();
},[])


 const  movieFetcher =  useCallback(async ()=>
{
    setError(null);
    setLoading(true);
 try{
    
    const response=   await   fetch('https://swapi.dev/api/films/');
    
    const data = await response.json()
     

    if(!response.ok)
    { 
       
        throw new Error('Error is occured')
        
    }

    setMovies(data.results)
    setLoading(false)

   
 }
 catch(error){
   setError(error.message)
 
   
 }
 setLoading(false);


 
},[])




  return (
    <>
    <button className="fetchMovies" onClick={movieFetcher}> Fetch Movies</button>
      {loading&& <p>Content is loading Please wait!!</p>}
     
      {!loading && error && <p>Some technical Error.</p>}

      {!loading && movies.length===0 && <p>No Movies found, Please click on fetch movies to fetch movies</p>}
      {movies.map((items)=>
       {
        return(
            
            <div className="movieList" key={items.episode_id}>
            <div className="movieTitle">
              <h2>{items.title}</h2>
            </div>
            <div className="movieReleaseDate">
              <h4>{items.release_date}</h4>
              <p>{items.opening_crawl}</p>
            </div>
          </div>
        )
       })}
         
        
      
    </>
  );
};

export default MoviesList;
