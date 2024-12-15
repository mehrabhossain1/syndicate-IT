import { Link } from "react-scroll";
import { services } from "../../data";
import { convertHexToRgba, cssPerfectShape } from "../../utils";
import { FaArrowRightLong } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useRef } from "react";

import "./Services.css";

const Services = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })

        .fromTo(
          [
            "#services .section-header h3",
            "#services .section-header h2",
            "#services .services .service",
            "#services .spotlight",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: containerRef }
  );

  return (
    <section id="services" ref={containerRef}>
      <div className="spotlight" />
      <div className="container">
        <div className="section-header">
          <h3>Our Services</h3>
          <h2>Empowering Your Business with Tailored IT Solution</h2>
        </div>

        <div className="services">
          {services.map((service, index) => (
            <div
              className="blur service"
              style={{
                background: convertHexToRgba("--bg-secondary", 0.8),
              }}
              key={index}
            >
              <div
                className="icon"
                style={{
                  ...cssPerfectShape(70, 70),
                  background: convertHexToRgba("--primary", 0.1),
                }}
              >
                <service.icon />
              </div>

              <div className="middle">
                <h4 className="title">{service.title}</h4>
                <p className="line-clamp-3 description">
                  {service.description}
                </p>
              </div>

              <div className="bottom">
                <Link to="contact" className="btn primary">
                  Explore <FaArrowRightLong />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
