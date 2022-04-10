import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './App.css';
import { Filter, Movie as MovieComponent } from './Components';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
};

function App() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopular = async () => {
    const data = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_MOVIES_API_KEY
    }&language=en-US&page=1`);

    const movies = await data.json();

    setPopularMovies(movies.results);
    setFilteredMovies(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className="App">
      <Filter
        popularMovies={popularMovies}
        setFilteredMovies={(movies) => setFilteredMovies(movies)}
        activeGenre={activeGenre}
        setActiveGenre={(id) => setActiveGenre(id)}
      />

      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filteredMovies.map((movie) => (
            <MovieComponent key={movie.id} movie={movie} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
