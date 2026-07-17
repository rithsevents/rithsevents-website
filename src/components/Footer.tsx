import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <a href="#home">
            <Logo isLight={true} />
          </a>

          <div className="flex flex-wrap justify-center gap-8 text-base font-medium text-gray-500">
            <a href="#home" className="hover:text-gold">
              Home
            </a>
            <a href="#services" className="hover:text-gold">
              Services
            </a>
            <a href="#gallery" className="hover:text-gold">
              Gallery
            </a>
            <a href="#about" className="hover:text-gold">
              About
            </a>
            <a href="#contact" className="hover:text-gold">
              Contact
            </a>
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