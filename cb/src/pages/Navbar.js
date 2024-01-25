
import { NavLink } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  return (
      <nav className="navbar">
          <p>LOGO</p>
          <ul>
              <li>
                  <NavLink to="/">Home</NavLink>
              </li>
              <li><a href="#">About Us</a></li>
              <li><a href ="#">Contact Us</a></li>
          </ul>
          
    </nav>
  );
};

export default Navbar;
