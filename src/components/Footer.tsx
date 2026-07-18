import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Unified configuration array matching the Navbar architecture
  const navLinks = [
    { name: "Home", path: "/", hash: "home" },
    { name: "Services", path: "/", hash: "services" },
    { name: "Gallery", path: "/", hash: "gallery" },
    { name: "About", path: "/", hash: "about" },
    { name: "Contact", path: "/", hash: "contact" },
  ];

  // Interceptor that handles single-page smooth scrolling or cross-page redirection routes
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string, hash: string) => {
    e.preventDefault();

    if (location.pathname === path) {
      // If already home, perform smooth scroll targeting the target section element ID
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (hash === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // If on a subpage, navigate to root first, then allow the node to mount before scrolling down
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (hash === "home") {
          window.scrollTo({ top: 0 });
        }
      }, 150); // Safe micro-task compilation delay for framework mounting stability
    }
  };

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo Redirect Link */}
          <a 
            href="/#home" 
            onClick={(e) => handleNavigation(e, "/", "home")}
          >
            <Logo isLight={true} />
          </a>

          {/* Fixed Router Intercepted Links Layout Array */}
          <div className="flex flex-wrap justify-center gap-8 text-base font-medium text-gray-500">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`/#${link.hash}`} // Retains fallback semantic parse structures for SEO spiders
                onClick={(e) => handleNavigation(e, link.path, link.hash)}
                className="hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section: Centered Copyright and Startup Footnote */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-gray-50 space-y-2">
          <div className="text-md text-gray-400 text-center">
            © 2026 Riths Events. All rights reserved.
          </div>

          <div className="text-sm text-gray-400 text-center">
            Designed & Developed by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-semibold hover:underline transition-all"
            >
              Karpi Tech Labs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;