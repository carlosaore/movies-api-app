import { Link } from "react-router-dom";

const Navbar = () => (
    <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/movie">More</Link></li>
      </ul>
);

export default Navbar;