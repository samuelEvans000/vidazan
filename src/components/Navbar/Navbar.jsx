// import Home from "../Home/Home";
// import AboutUs from "../AboutUs/AboutUs";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to='/'>
            <img src={logo} />
        </Link>
      </div>

      <div className="navbar-content">
        <nav className="navbar-content-1">
          <ul className="nav-list-1">
            <li className="nav-item">
              <div className="dropdown">
                <Link  to="/about">About Us </Link>
                <div className="dropdown-content">
                  <Link to="/our-vision">Our Vision</Link>
                  <Link to='/our-mission'>Our Mission</Link>
                  <Link to='/our-values'>Our Values</Link>
                  <Link to='/our-team'>Our Team</Link>
                  <Link to='/our-committee'>Our Committee</Link>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <div className="dropdown">
              <Link to="/formulation-reasearch-solutions">
                Formulation Reasearch Solution
              </Link>
                <div className="dropdown-content">
                  <Link to="/drug-discovery-research-solutions ">Drug discovery research solutions </Link>
                  <Link to='/pulmonary-drug-delivery'>Pulmonary Drug delivery</Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-content-2">
          <ul className="nav-list-2">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/line-of-activity">Line of activity</Link>
            </li>

            <li className="nav-item">
              <Link to="/biocatalysis">Biocatalysis</Link>
            </li>
            <li className="nav-item">
              <Link to="/biosimilars">Biosimilars</Link>
            </li>

            <li className="nav-item">
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
