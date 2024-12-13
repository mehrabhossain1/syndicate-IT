import About from "./segments/About";
import Achievement from "./segments/Achievement";
import Hero from "./segments/Hero";
import Navbar from "./segments/Navbar";
import Services from "./segments/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievement />
      <About />
      <Services />
    </>
  );
}

export default App;
