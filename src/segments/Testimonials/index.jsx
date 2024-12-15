import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clientsReviews } from "../../data";
import { convertHexToRgba, cssPerfectShape, starDecoder } from "../../utils";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useRef } from "react";

import "./Testimonials.css";

const Testimonials = () => {
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
            "#testimonials .section-header h3",
            "#testimonials .section-header h2",
            "#testimonials .testimonial",
            "#testimonials .spotlight",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: containerRef }
  );

  return (
    <section id="testimonials" ref={containerRef}>
      <div className="container">
        <div className="spotlight" />
        <div className="section-header">
          <h3>What Our Clients Say</h3>
          <h2>Trusted Worldwide for Cutting-Edge IT Solutions</h2>
        </div>

        <Swiper
          className="testimonials-wrapper"
          slidesPerView={1}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay
          loop
          speed={1000}
          grabCursor
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {clientsReviews.map((client, index) => (
            <SwiperSlide
              className="blur testimonial"
              style={{
                background: convertHexToRgba("--bg-secondary", 0.5),
              }}
              key={index}
            >
              <div className="top">
                <div className="content">{client.content}</div>
              </div>
              <div className="bottom">
                <div className="star-container">
                  {starDecoder(client.rating)}
                </div>

                <div style={{ ...cssPerfectShape(60, 60) }} className="profile">
                  <img src={client.image} alt="" />
                </div>

                <h3 className="name">{client.name}</h3>

                <p className="job-title">{client.jobTitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
