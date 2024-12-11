import SyndicateItLogo from "../../components/SyndicateItLogo";
import "./Navbar.css";
import { navRoutes } from "../../data";
import { Link } from "react-scroll";
import Socials from "../../components/Socials";

const Navbar = () => {
  return (
    <nav id="navbar">
      <SyndicateItLogo />
      <div className="route-wrapper">
        {navRoutes.map((route, index) => (
          <Link
            to={route.id}
            className="route"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-50}
            key={index}
          >
            {route.name}
          </Link>
        ))}
      </div>

      <Socials />
    </nav>
  );
};

export default Navbar;
