import { useState } from 'react';
import './movie.css'
import MoviesList from './MoviesList';

const Movie =(props)=>
{
//  const [movies,setMovies]=useState({
//     title:"",
//     releaseDate:new Date("")
//  })

//  console.log(movies)



// const movieTitle = movies.map(title=>title.title);
// const movieReleaseDate = movies.map(realease_Date=>realease_Date.realease_Date);
// const movieId =movies.map(id=>id.id);



    return(
<div className='movie'>
    <form className='form'>
<label>
    Title: 
</label>
<input type='text' className='movieInput'/>

<label>
    Release Date:
</label>
<input type='date' className='movieInput'/>


<button type='submit' className='movieButton'>Add Movie</button>
    </form>


</div>
    )
}

export default Movie;