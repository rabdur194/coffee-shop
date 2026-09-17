import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Menu from "./components/sections/Menu";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-coffee-950">
      <Header />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
