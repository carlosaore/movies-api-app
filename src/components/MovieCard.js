import FavoriteButton from "./atoms/FavoriteButton";
import MovieImg from "./atoms/MovieImg";
import Text from "./atoms/Text";
import StyledDiv from "./atoms/StyledDiv";



const MovieCard = props => (
    <StyledDiv {...props}>
        <MovieImg
            src={props.posterUrl}
            onError={(event) => event.target.src="https://via.placeholder.com/250x370?text=POSTER"}
        />
        <Text bold>
            {props.title}
        </Text>
        <Text>
            <small>{props.plot}</small>
        </Text>
        {!props.location &&
            <FavoriteButton
                id={props.id}
                onClick={(event) => props.isFavorite
                    ? props.setFavoriteMovies(props.favoriteMovies.filter(id => id !== Number(event.target.id)))
                    : props.setFavoriteMovies([...props.favoriteMovies, Number(event.target.id)].sort((a, b) => a-b))}
            >
                {props.isFavorite
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
            </FavoriteButton>
        }
    </StyledDiv>
);

export default MovieCard;