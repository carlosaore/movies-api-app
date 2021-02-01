import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type : none;
  padding : 25px;
  margin : 0%;
  background-color : #e8e8e8;
`

const Navbar = () => (
  <Ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/favorites">Favorite movies</Link></li>
  </Ul>
);

export default Navbar;