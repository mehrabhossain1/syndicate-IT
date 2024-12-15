import About from "./segments/About";
import Achievement from "./segments/Achievement";
import Blog from "./segments/Blog";
import Contact from "./segments/Contact";
import Footer from "./segments/Footer";
import Hero from "./segments/Hero";
import Navbar from "./segments/Navbar";
import Portfolio from "./segments/Portfolio";
import Services from "./segments/Services";
import Testimonials from "./segments/Testimonials";

import "swiper/css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievement />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
