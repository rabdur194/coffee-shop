import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Menu from "./components/sections/Menu";

function App() {
  return (
    <div className="min-h-screen bg-coffee-950">
      <Header />
      <main>
        <Hero />
        <Features />
        <Menu />
      </main>
    </div>
  );
}

export default App;
