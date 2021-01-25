import styled from "styled-components";
import MovieImg from "./atoms/MovieImg"
import Text from "./atoms/Text"

const StyledDiv = styled.div`
    display : flex;
    flex-direction : column;
    margin : 10px;
`

const MovieCard = props => (
    <>
        <StyledDiv>
            <MovieImg
                src={props.posterUrl}
                onError={(event) => event.target.src="https://via.placeholder.com/250x370?text=POSTER"}/>
            <Text>{props.title}</Text>
        </StyledDiv>
    </>
);

export default MovieCard;