import styled from "styled-components";
import FavoriteButton from "./atoms/FavoriteButton";
import MovieImg from "./atoms/MovieImg"
import Text from "./atoms/Text"

const StyledDiv = styled.div`
    display : flex;
    flex-direction : column;
    margin : 10px;
    width : 250px;
`

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
        <FavoriteButton
            id={props.id}
            onClick={(event) => props.isFavorite
                ? props.setFavoriteMovies(props.favoriteMovies.filter(index => index !== Number(event.target.id)))
                : props.setFavoriteMovies([...props.favoriteMovies, Number(event.target.id)])}
        >
            {props.isFavorite
                ? "Remove from favorites"

                : "Add to favorites"
            }
        </FavoriteButton>
    </StyledDiv>
);

export default MovieCard;