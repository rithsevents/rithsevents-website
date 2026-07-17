import { X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { cn } from "../lib/utils";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Structural update: separate base paths from sectional hashes
  const navLinks = [
    { name: "Home", path: "/", hash: "home" },
    { name: "Services", path: "/", hash: "services" },
    { name: "Gallery", path: "/", hash: "gallery" },
    { name: "About", path: "/", hash: "about" },
    { name: "Contact", path: "/", hash: "contact" },
  ];

  // Dual-purpose navigator: smooth scrolls if on home, transitions + jumps if on subpages
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string, hash: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname === path) {
      // Case 1: Already on the landing page -> smoothly scroll down
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (hash === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Case 2: On an inner page (like /weddings) -> push root route, then scroll
      navigate(path);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (hash === "home") {
          window.scrollTo({ top: 0 });
        }
      }, 150); // Small lifecycle macro-task delay to allow the DOM node to mount
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-charcoal/40 backdrop-blur-sm py-5",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-start gap-12">
          {/* Main Logo Redirection Link */}
          <Link 
            to="/" 
            onClick={(e) => handleNavigation(e, "/", "home")} 
            className="flex-shrink-0"
          >
            <Logo isLight={isScrolled} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`/#${link.hash}`} // Fallback for pure semantic parsing
              onClick={(e) => handleNavigation(e, link.path, link.hash)}
              className={cn(
                "text-lg font-medium transition-colors hover:text-gold",
                isScrolled ? "text-charcoal" : "text-white",
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://forms.gle/E5MkhRyzW41yH6D29"
            className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-gold/20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            isScrolled ? "text-charcoal" : "text-white",
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex md:hidden"
            style={{ pointerEvents: "auto" }}
          >
            {/* Dark Blur Overlay Backdrop */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ zIndex: 1 }}
            />
            
            {/* Sliding Mobile Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="ml-auto w-4/5 max-w-xs h-full bg-white shadow-2xl flex flex-col relative z-10"
              style={{ minWidth: "260px", height: "100vh" }}
            >
              <button
                className="absolute top-4 right-4 text-charcoal"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X size={28} />
              </button>

              {/* Logo container within sidebar */}
              <div className="flex items-center justify-start px-6 pt-8 pb-4">
                <Link 
                  to="/" 
                  onClick={(e) => handleNavigation(e, "/", "home")}
                >
                  <Logo isLight={false} forceDark={true} />
                </Link>
              </div>

              {/* Sidebar Action Item List */}
              <div className="flex flex-col gap-8 px-6 mt-2 flex-1 justify-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`/#${link.hash}`}
                    onClick={(e) => handleNavigation(e, link.path, link.hash)}
                    className="text-xl font-semibold text-charcoal hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://forms.gle/E5MkhRyzW41yH6D29"
                  className="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-gold/20 text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;