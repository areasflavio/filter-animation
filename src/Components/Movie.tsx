import { motion } from 'framer-motion';

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
};

interface MovieProps {
  movie: Movie;
}

function Movie({ movie }: MovieProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
    </motion.div>
  );
}

export { Movie };
