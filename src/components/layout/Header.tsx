import { useState } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-coffee-950/90 backdrop-blur-md border-b border-coffee-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">♨️</span>
            <span className="font-display text-xl font-bold text-coffee-100">
              Coffee Aroma
            </span>
          </a>
          {/* desktop navigations    */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-coffee-200 hover:text-coffee-300
                 transition-colors relative after:absolute after:bottom-[-4px] 
                 after:left-0 after:h-[2px] after:w-0 after:bg-coffee-400 
                 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 rounded-full bg-coffee-500 hover:bg-coffee-400 text-white text-sm font-semibold transition-all shadow-lg shadow-coffee-900/40 hover:shadow-coffee-500/30 hover:-translate-y-0.5"
            >
              Order Now
            </a>
          </nav>

          {/* mobile Menu */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-coffee-200 hover:text-white"
            aria-label="toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 pt-2 border-t border-coffee-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-coffee-200 hover:text-coffee-100 hover:bg-coffee-900/50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-full bg-coffee-500 hover:bg-coffee-400 text-white font-semibold transition-colors"
              >
                Order Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
