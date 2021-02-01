import MovieCard from "./MovieCard";

const RandomMovie = (props) => (
    <>
        <MovieCard {...props.location.state.randomMovie} {...props} addMargin/>
    </>
);

export default RandomMovie;