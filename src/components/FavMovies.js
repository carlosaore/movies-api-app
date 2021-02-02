import AllMoviesDiv from "./atoms/AllMoviesDiv";
import RandomButton from "./atoms/RandomButton";
import MovieCard from "./MovieCard";

const FavMovies = props => {
    
    function handlePickRandomMovie() {
        const randomNumber = Math.floor(Math.random() * props.favoriteMovies.length);
        const randomMovie = props.data.movies[props.favoriteMovies[randomNumber] - 1];
        console.log(randomNumber)
        console.log(randomMovie)
        props.history.push({
            pathname : "/random",
            state : {
                randomMovie : randomMovie
            }
        })
    };

    return (
    <>
        {props.favoriteMovies.length !== 0 &&
            <RandomButton onClick={handlePickRandomMovie} >
                Pick a random movie
            </RandomButton>
        }
        <AllMoviesDiv {...props}>
            { props.data.movies !== undefined
                ? props.data.movies.filter(movie => props.favoriteMovies.includes(movie.id)).map((movie, index) => (
                    <MovieCard
                        {...movie}
                        setFavoriteMovies={props.setFavoriteMovies}
                        favoriteMovies={props.favoriteMovies}
                        key={props.id}
                        index={props.index}
                        isFavorite={props.favoriteMovies.includes(movie.id)}
                    />
                ))
                : <p>...loading</p>
            }
        </AllMoviesDiv>
    </>
)};

export default FavMovies;
