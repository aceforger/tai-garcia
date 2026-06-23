import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Book3D from "./components/Book3D";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Book3D />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
