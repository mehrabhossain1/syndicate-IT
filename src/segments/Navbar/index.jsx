import SyndicateItLogo from "../../components/SyndicateItLogo";
import "./Navbar.css";
import { navRoutes } from "../../data";
import { Link } from "react-scroll";
import Socials from "../../components/Socials";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(!open)} />

      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(!open)} />
      )}

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

        <div className="menu" onClick={() => setOpen(!open)}>
          <CgMenuRight />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
