type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
};

interface MovieProps {
  movie: Movie;
}

function Movie({ movie }: MovieProps) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
    </div>
  );
}

export { Movie };
