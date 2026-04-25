import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Instagram, Facebook, Mail } from "lucide-react";
import { cn } from "./lib/utils";
import Logo from "./components/Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

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
        <a href="#home">
          <Logo isLight={isScrolled} />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
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
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-charcoal hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gold text-white text-center py-3 rounded-xl font-bold mt-2"
            >
              Get a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
          alt="Elegant Event Setup"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Premium Event Planning & Management
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
            Crafting Unforgettable <br />
            <span className="italic">Moments of Magic</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            From Weddings to grand celebrations Let's make your event grand,
            colourful and extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              target="_blank"
              href="https://forms.gle/E5MkhRyzW41yH6D29"
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Start Planning Now
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Weddings/Receptions",
      description:
        "Comprehensive wedding planning, from intimate ceremonies to lavish celebrations, tailored to your unique love story.",
      image: "assets/images/services/wedding-image.jpg",
      icon: "💑",
    },
    {
      title: "Engagement Function",
      description:
        "Make your engagement function unforgettable with our expert planning and personalized touches.",
      image: "assets/images/services/engagement-function.jpg",
      icon: "💍",
    },
    {
      title: "Corporate Events",
      description:
        "Professional management for conferences, product launches, and galas.",
      image: "assets/images/services/corporate-event.jpg",
      icon: "🏢",
    },
    {
      title: "Birthday Partys & Private Gatherings",
      description:
        "Birthdays, anniversaries, and intimate gatherings with a unique touch.",
      image: "assets/images/services/birthday-party.jpg",
      icon: "🎉",
    },
    {
      title: "Surprise Decor",
      description:
        "Transform any space with our surprise decor services for unforgettable moments.",
      image: "assets/images/services/surprise-decor.jpg",
      icon: "🎈",
    },
    {
      title: "Baby Shower",
      description:
        "Celebrate your baby's arrival with our elegant and personalized baby shower planning.",
      image: "assets/images/services/baby-shower.jpg",
      icon: "👶",
    },
    {
      title: "Catering Services - Yogaambiga",
      description:
        "We are the 4th Generation of Caterers, operating in the name of Yogaambiga catering service",
      image: "assets/images/services/Catering-service.webp",
      icon: "🍽️",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">
            What We Do
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-charcoal">
            Our Signature Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3 text-charcoal">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href={
                    idx === 3
                      ? "assets/images/package-details/birthday-package.jpeg"
                      : "#contact"
                  }
                  target={idx === 3 ? "_blank" : undefined}
                  className="text-gold font-semibold text-sm hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const stage = [
    "assets/images/gallery/stage/photo-1.webp",
    "assets/images/gallery/stage/photo-2.webp",
    "assets/images/gallery/stage/photo-3.webp",
    "assets/images/gallery/stage/photo-4.webp",
    "assets/images/gallery/stage/photo-5.webp",
    "assets/images/gallery/stage/photo-6.webp",
    "assets/images/gallery/stage/photo-7.webp",
  ];

  const cakes = [
    "assets/images/gallery/cakes/cake-1.webp",
    "assets/images/gallery/cakes/cake-2.webp",
    "assets/images/gallery/cakes/cake-3.webp",
    "assets/images/gallery/cakes/cake-4.webp",
    "assets/images/gallery/cakes/cake-5.webp",
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">
              Gallery
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal">
              Our Birthday Decorations
            </h3>
          </div>
          <p className="text-gray-500 max-w-md">
            We make every event unique and memorable. Each photo tells a story
            of celebration and joy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stage.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative overflow-hidden rounded-2xl group cursor-pointer aspect-square",
                "md:row-span-2 md:aspect-auto",
              )}
            >
              <a href={img} target="_blank">
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
              {/* <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  Text
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
      <br />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal">
              Our Colourful Cakes
            </h3>
          </div>
          <p className="text-gray-500 max-w-md">
            Our colourful cakes are the centerpiece of every celebration,
            crafted with love and creativity to delight both the eyes and the
            palate.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {cakes.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative overflow-hidden rounded-2xl group cursor-pointer aspect-square",
                "md:row-span-2 md:aspect-auto",
              )}
            >
              <a href={img} target="_blank">
                <img
                  src={img}
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-charcoal text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gold rounded-3xl -z-0 hidden md:block" />
            <div className="absolute -top-8 -left-8 border-2 border-gold/30 w-64 h-64 rounded-3xl -z-0 hidden md:block" />
          </div>

          <div>
            <h2 className="text-gold font-semibold uppercase tracking-widest text-sm mb-4">
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Driven by Passion, <br />
              Defined by <span className="text-gold italic">Excellence</span>
            </h3>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              At Riths Events, we believe every celebration is a unique
              masterpiece. Founded on the principles of creativity and
              meticulous planning, we've spent over a decade turning dreams into
              reality.
            </p>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Our team of expert planners and designers work tirelessly to
              ensure that every detail—from the grandest floral arrangements to
              the smallest table setting—is perfect. We don't just plan events;
              we create experiences that resonate.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-serif text-gold mb-2">10+</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-serif text-gold mb-2">500+</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">
                  Events Managed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Feedback 1",
      role: "Wedding Client",
      text: `Sharing my honest review!!. My entire family was so so happy with all your works, everything was so neat and perfect. No clumsiness really so well organized. All your staffs were so kind enough we had a stress free event 🥰
             Food was really good i was bit worried as I did not taste before but it was so good ❤️ Next non veg event enga panreenga nu solunga will come for tasting 😜 
             \n Over all super good event, much recommend Riths Events 🙏🔥`,
      avatar: "",
    },
    {
      name: "Feedback 2",
      role: "Birthday Event",
      text: `A huge thank you to Rithevents Mania (Mrs.Nivedha and team) for an absolutely perfect birthday party!
       I was initially skeptical and worried about how it would all come together,
      but your team completely blew me away. The moment I saw the initial setup, all my concerns vanished.
      The arrangements were flawless. The food was delicious. I'm really impressed on your team's work and their humbleness. You exceeded all my expectations!.
      Thanks again,The party was a huge success. This made us proud 😊 
      Wishing you continued success. Highly recommended!`,
      avatar: "",
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">
            Our Happy Clients
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-charcoal">
            What Our Clients Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-gold mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                { review?.avatar && (
                  <img
                    src={review?.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <h4 className="font-bold text-charcoal">{review.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Constructing the email body with proper formatting
    const subject = encodeURIComponent(
      "New Event Enquiry - Riths Events Website",
    );
    const body = encodeURIComponent(
      `Hello Riths Events,\n\n` +
        `I would like to enquire about your services.\n\n` +
        `Name: ${data.name}\n` +
        `Phone: ${data.phone}\n` +
        `Email: ${data.email}\n` +
        `Event Type: ${data.service}\n` +
        `Message: ${data.message}\n`,
    );

    try {
      // This triggers the user's default mail client
      window.location.href = `mailto:rithsevents@gmail.com?subject=${subject}&body=${body}`;

      // Set success immediately since we can't track the actual 'send' in a mail app
      setStatus("success");
      (e.target as HTMLFormElement).reset();

      // Reset status after 5 seconds to allow for new entries
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-charcoal rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-1/3 p-12 bg-gold text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-serif mb-6">
                Let's Create Something Beautiful
              </h3>
              <p className="text-white/80 mb-12">
                Ready to start planning your next event? Fill out the form and
                our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Call Us
                    </p>
                    <p className="font-bold">+91 9092859794</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Email Us
                    </p>
                    <p className="font-bold">rithsevents@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a
                href="https://www.instagram.com/rithseventmania/"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/nivedha.nivedha.56481/"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">
                    Full Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder=""
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder=""
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">
                    Phone Number
                  </label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/50 font-bold">
                    Event Type
                  </label>
                  <select
                    name="service"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                  >
                    <option value="wedding" className="bg-charcoal">
                      Wedding
                    </option>
                    <option value="corporate" className="bg-charcoal">
                      Corporate Event
                    </option>
                    <option value="private" className="bg-charcoal">
                      Private Party
                    </option>
                    <option value="other" className="bg-charcoal">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/50 font-bold">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button
                disabled={status === "loading"}
                type="submit"
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-lg transition-all shadow-xl",
                  status === "loading"
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gold hover:bg-gold-dark text-white",
                )}
              >
                {status === "loading" ? "Sending..." : "Send Enquiry"}
              </button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-center font-medium"
                >
                  Thank you! Your enquiry has been sent successfully.
                </motion.p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center font-medium">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

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
              Karpi AI Labs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  const whatsappNumber = "919092859794";

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=Hi%20Riths%20Events,%20I'm%20interested%20in%20your%20services!`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
};

export default function LandingPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
