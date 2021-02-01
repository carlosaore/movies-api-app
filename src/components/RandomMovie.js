import MovieCard from "./MovieCard";

const RandomMovie = (props) => (
    <>
        <MovieCard {...props.location.state.randomMovie} {...props}/>
    </>
);

export default RandomMovie;