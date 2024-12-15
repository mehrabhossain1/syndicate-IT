import { blogPost } from "../../data";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useRef } from "react";

import "./Blog.css";

const Blog = () => {
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
            "#blog .section-header h3",
            "#blog .section-header h2",
            "#blog .blog-card",
          ],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.5 }
        );
    },
    { scope: containerRef }
  );

  return (
    <section id="blog" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <h3>Blog Post</h3>
          <h2>Insights & Innovations</h2>
        </div>

        <div className="blogs-grid">
          {blogPost.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="top">
                <img src={blog.image} alt="blog image" />
              </div>

              <div className="bottom">
                <h3 className="line-clamp-2">{blog.title}</h3>
                <p className="line-clamp-3 description">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
