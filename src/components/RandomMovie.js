import MovieCard from "./MovieCard";

const RandomMovie = (props) => (
    <>
        {props.location.state &&
            <MovieCard {...props.location.state.randomMovie} {...props} addMargin/>
        }
    </>
);

export default RandomMovie;