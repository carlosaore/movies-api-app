import AllMoviesDiv from "./atoms/AllMoviesDiv";
import MovieCard from "./MovieCard";

const FavMovies = props => (
    <AllMoviesDiv {...props}>
        { props.data.movies !== undefined
            ? props.data.movies.filter(movie => props.favoriteMovies.includes(movie.id)).map((movie) => (
                <MovieCard
                    {...movie}
                    setFavoriteMovies={props.setFavoriteMovies}
                    favoriteMovies={props.favoriteMovies}
                    key={props.id}
                    index={props.id}
                    isFavorite={props.favoriteMovies.includes(movie.id)}
                />
            ))
            : <p>...loading</p>
        }
    </AllMoviesDiv>
);

export default FavMovies;
