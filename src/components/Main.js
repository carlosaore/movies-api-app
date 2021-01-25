import styled from "styled-components";
import MovieCard from "./MovieCard";

const AllMoviesDiv = styled.div`
    display : flex;
    flex-wrap : wrap;
`

const Main = props => (
    <>
        <p>Main components</p>
        {props.categories !== undefined 
            ? props.categories.map(cat => (<p>{cat}</p>))
            : ""
        }
    </>
);

export default Main;
