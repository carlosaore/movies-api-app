import { Link } from "react-router-dom";
import NavbarUl from "./atoms/NavbarUl"

const Navbar = () => (
  <NavbarUl>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/favorites">Favorite movies</Link></li>
  </NavbarUl>
);

export default Navbar;