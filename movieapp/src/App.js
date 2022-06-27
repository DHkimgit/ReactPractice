import React, {useState, useEffect} from 'react'
import Movie from './movie';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovies();
  }, [])
  console.log(movies);
  return (
    <div>{loading ? <h3>loading</h3> : 
    <div>{movies.map((movie) => 
      <Movie 
        movie = {movie} 
        coverImg = {movie.medium_cover_image} 
        title={movie.title} 
        summary = {movie.summary} 
        genres = {movie.genres}/>
      )}
    </div>}
    </div>
  )
}

export default App;
