import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { portfolio } from "../../data";

import "./Portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header">
          <h3>Our Portfolio</h3>
          <h2>Showcasing Innovative IT Solutions that Drive Real Results</h2>
        </div>

        <Swiper
          className="portfolio-wrapper"
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
          {portfolio.map((list, index) => (
            <SwiperSlide key={index} className="portfolio">
              <div className="image-wrapper">
                <img src={list.image} loading="lazy" alt="portfolio image" />
              </div>
              <div className="content-wrapper">
                <h3 className="title">{list.title}</h3>
                <p className="description">{list.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
