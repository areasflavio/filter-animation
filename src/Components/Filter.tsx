import { useEffect } from 'react';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
};

interface FilterProps {
  popularMovies: Movie[];
  setFilteredMovies: (movies: Movie[]) => void;
  activeGenre: number;
  setActiveGenre: (id: number) => void;
}

function Filter({
  popularMovies,
  setFilteredMovies,
  activeGenre,
  setActiveGenre,
}: FilterProps) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilteredMovies(popularMovies);
      return;
    }

    const filteredMovies = popularMovies.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );

    setFilteredMovies(filteredMovies);
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? 'active' : ''}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
}

export { Filter };
