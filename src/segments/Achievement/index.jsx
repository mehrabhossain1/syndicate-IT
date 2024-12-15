import Odometer from "react-odometerjs";
import { useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import "odometer/themes/odometer-theme-default.css";

import "./Achievement.css";

const Achievement = () => {
  const containerRef = useRef(null);

  const [clients, setClients] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [projects, setProjects] = useState(0);

  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "20% bottom",
            end: "bottom top",

            onEnter: () => {
              setTimeout(() => {
                setClients(200);
                setSatisfaction(98);
                setProjects(500);
              }, 2000);
            },
          },
        })

        .fromTo(
          "#achievement .achievement",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: containerRef }
  );

  return (
    <section id="achievement" ref={containerRef}>
      <div className="container">
        <div className="achievement">
          <p className="sub-title">Trusted By</p>
          <Odometer value={clients} className="title" />
          <p className="sub-title">Clients</p>
          <p className="description">
            Building lasting partnerships through reliable IT services.
          </p>
        </div>

        <div className="achievement">
          <p className="sub-title">Clients With</p>
          <Odometer value={satisfaction} className="title" />
          <p className="sub-title">Satisfaction</p>
          <p className="description">
            Delivering IT solutions that boost productivity.
          </p>
        </div>

        <div className="achievement">
          <p className="sub-title">Deployed</p>
          <Odometer value={projects} className="title" />
          <p className="sub-title">IT Infrastructures</p>
          <p className="description">
            Delivered robust IT systems for businesses worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
