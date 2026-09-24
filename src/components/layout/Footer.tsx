import { Coffee } from "lucide-react";
import { FaInstagram, FaFacebook, FaSnapchat } from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-coffee-950 border-t border-coffee-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-coffee-400" />
              <span className="font-display text-xl font-bold text-coffee-100">
                Coffee Aroma
              </span>
            </a>
            <p className="text-coffee-400 text-sm leading-relaxed max-w-xs">
              Premium single-origin coffee, roasted with care and delivered
              fresh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-coffee-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-coffee-400 hover:text-coffee-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-coffee-100 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center text-coffee-300 hover:bg-coffee-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center text-coffee-300 hover:bg-coffee-600 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-coffee-800 flex items-center justify-center text-coffee-300 hover:bg-coffee-600 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaSnapchat className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-coffee-800 text-center">
          <p className="text-sm text-coffee-500">
            © {new Date().getFullYear()} Coffee Aroma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
