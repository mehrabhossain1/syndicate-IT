import SyndicateItLogo from "../../components/SyndicateItLogo";
import { navRoutes } from "../../data";
import { Link } from "react-scroll";
import Socials from "../../components/Socials";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "../../components/Sidebar";
import { useMemo, useState } from "react";
import { convertHexToRgba } from "../../utils";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const dropNavbar = () => {
    if (window.scrollY > 200) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  useMemo(() => {
    window.addEventListener("scroll", dropNavbar);
    return () => window.removeEventListener("scroll", dropNavbar);
  });

  console.log("drop navbar", drop);

  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(!open)} />

      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(!open)} />
      )}

      <nav
        id="navbar"
        className={drop ? "blur drop" : ""}
        style={{ background: convertHexToRgba("--bg-base", 0.8) }}
      >
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
