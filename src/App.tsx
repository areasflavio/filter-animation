import { useEffect, useState } from 'react';
import './App.css';
import { Movie as MovieComponent } from './Components/Movie';

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

function App() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const fetchPopular = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_MOVIES_API_KEY
    }&language=en-US&page=1`);

    const movies = await data.json();

    setPopularMovies(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <div className="popular-movies">
        {popularMovies.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
