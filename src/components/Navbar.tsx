import { FaBars } from "react-icons/fa";
import { FaB } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link" aria-disabled="true">
              Disabled
            </a>
          </div>
        </div>
        <div className="d-flex" role="search">
          <button className="btn btn-sm btn-outline-light">Login</button>
          <button className="btn btn-sm btn-outline-light mx-1">Logout</button>
          <FaBars color="white"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
