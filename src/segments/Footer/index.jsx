import SyndicateItLogo from "../../components/SyndicateItLogo";
import Socials from "../../components/Socials";
import { contactInfo, footer } from "../../data";
import { Link } from "react-scroll";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <section className="newsletter">
          <h2>NEWSLETTER</h2>
          <p>
            Keep up with our latest news and events. Subscribe to our newsletter
          </p>

          <div className="subscribe">
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="button">Join</button>
          </div>
        </section>

        <section className="box-wrapper">
          <div className="box">
            <SyndicateItLogo />
            <p>Innovating IT solutions for business transformation.</p>
            <Socials />
          </div>

          {footer.map((list, index) => (
            <div className="box" key={index}>
              <h3 className="title">{list.title}</h3>
              <div className="routes">
                {list.subRoutes.map((route, index) => (
                  <Link key={index} to={route.id} className="route">
                    {route.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="box">
            <h3 className="title">Contact Details</h3>
            {contactInfo.map((info, index) => (
              <div className="route" key={index}>
                <div className="icon">
                  <info.icon />
                </div>

                <p>{info.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
