import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; // Ensure these are imported from your lucide package

const Birthdays: React.FC = () => {
  const [selectedBonus, setSelectedBonus] = useState<string>("");

  // State to track which image is currently open in the slideshow modal (null means closed)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tierFlyer = "assets/images/package-details/birthday-package-1.webp";
  const detailFlyer = "assets/images/package-details/birthday-package-2.webp";

  const premiumInclusions = [
    {
      title: "Delicious Food",
      desc: "Full catering service absolutely free for 100 guests.",
    },
    {
      title: "Theme Decoration",
      desc: "Premium theme decor, party hats, pop blasts, entrance arch, 2 baby cutouts & welcome board.",
    },
    {
      title: "Photo & Video Suite",
      desc: "Professional coverage, 200 photos with album (25 sheets) & 30-min edited video.",
    },
    {
      title: "Free Premium Frame",
      desc: "Elegant, high-quality printed photo frame included complimentary.",
    },
    {
      title: "4 KG Designer Cake",
      desc: "Stunning double-tier designer cake tailored to your theme.",
    },
    {
      title: "Free Sweet Treats",
      desc: "10 matching cupcakes, delicious donuts, and custom cake pops.",
    },
    {
      title: "100 Printed Invitations",
      desc: "Premium printed physical cards (designs chosen by customer).",
    },
    {
      title: "Return Gifts for 30 Kids",
      desc: "Free complete stationery return gift sets for young guests.",
    },
    {
      title: "Insta Selfie Booth",
      desc: "Interactive photo booth setups with live instant access.",
    },
    {
      title: "Royal Baby Car Entry",
      desc: "Grand entry vehicle equipped with premium pyro smoke effects & red carpet walk.",
    },
  ];

  // Update these strings with your actual image file locations
  // Inside your Birthdays component, right above the return statement:
  const birthdayGallery = [
    {
      id: 1,
      src: "assets/images/gallery/cakes/cake-1.webp",
      alt: "",
    },
    {
      id: 2,
      src: "assets/images/gallery/cakes/cake-2.webp",
      alt: "",
    },
    {
      id: 3,
      src: "assets/images/gallery/cakes/cake-3.webp",
      alt: "",
    },
    {
      id: 4,
      src: "assets/images/gallery/cakes/cake-4.webp",
      alt: "",
    },
    {
      id: 5,
      src: "assets/images/gallery/cakes/cake-5.webp",
      alt: "",
    },
    {
      id: 6,
      src: "assets/images/gallery/cakes/cake-6.webp",
      alt: "",
    },
    {
      id: 7,
      src: "assets/images/gallery/cakes/cake-7.webp",
      alt: "",
    },
    {
      id: 8,
      src: "assets/images/gallery/cakes/cake-8.webp",
      alt: "",
    },
  ];

  // Slideshow Navigation Helpers
  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents clicking the arrow from closing the modal
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === 0 ? birthdayGallery.length - 1 : prev! - 1,
      );
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === birthdayGallery.length - 1 ? 0 : prev! + 1,
      );
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 mb-16">
        <span className="text-amber-500 font-semibold tracking-widest text-sm uppercase">
          Celebration Packages
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mt-2">
          Birthdays & Private Gatherings
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg font-light">
          From intimate basic plans to grand, zero-stress premium custom bashes,
          we turn milestones into magical memories.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* SECTION 1: Side-by-Side Tier Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side: The 3 Tiered Packages Text Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 order-2 lg:order-1">
            {/* Basic Plan */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg">
              <div>
                <h3 className="text-xl font-bold text-sky-400">Basic Plan</h3>
                <div className="my-4">
                  <span className="text-3xl font-black text-white">
                    ₹25,000
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-gray-400 border-t border-neutral-800 pt-4">
                  <li className="flex items-center gap-2">
                    ✓ Beautiful Birthday Cake
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Professional Photo + Album
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Simple Elegant Decoration
                  </li>
                </ul>
              </div>
              <a
                href="#contact-form"
                className="mt-8 block text-center py-2.5 bg-neutral-800 hover:bg-neutral-700 text-gray-200 text-xs font-semibold rounded-xl border border-neutral-700/50 transition-all"
              >
                Enquire Basic
              </a>
            </div>

            {/* Standard Package */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg relative">
              <div>
                <h3 className="text-xl font-bold text-emerald-400">
                  Standard Package
                </h3>
                <div className="my-4">
                  <span className="text-3xl font-black text-white">
                    ₹35,000
                  </span>
                </div>
                <ul className="space-y-3 text-sm text-gray-400 border-t border-neutral-800 pt-4">
                  <li className="flex items-center gap-2">
                    ✓ Complete Decor & Cake
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Car Entry with Pyro Effects
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Professional Photo & Video
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ 6-Theme Specialized Shoot
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Complimentary Return Gifts
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Complimentary Invitations
                  </li>
                </ul>
              </div>
              <a
                href="#contact-form"
                className="mt-8 block text-center py-2.5 bg-neutral-800 hover:bg-neutral-700 text-gray-200 text-xs font-semibold rounded-xl border border-neutral-700/50 transition-all"
              >
                Enquire Standard
              </a>
            </div>

            {/* Premium Package Highlight */}
            <div className="bg-gradient-to-b from-neutral-900 to-amber-950/20 border-2 border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative scale-105 md:scale-100 lg:scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-neutral-950 font-bold text-[10px] px-3 py-0.5 rounded-full uppercase tracking-wider">
                Best Value
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-400">
                  Premium Package
                </h3>
                <div className="my-4">
                  <span className="text-3xl font-black text-white">
                    ₹60,000
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-3 font-light">
                  Worth ₹80,000+ (Save ₹20,000 instantly)
                </p>
                <ul className="space-y-2.5 text-xs text-gray-300 border-t border-neutral-800 pt-4">
                  <li className="flex items-center gap-2 text-amber-300 font-medium">
                    ★ Includes Food for 100 Members
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Complete Theme Decoration
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Premium Photo, Video & Frame
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ 4KG Cake + Cupcakes & Donuts
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Royal Car Entry with Pyro
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Insta Selfie Booth Included
                  </li>
                  <li className="flex items-center gap-2 font-medium text-purple-300">
                    ✓ + 1 Exclusive Free Bonus
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  document
                    .getElementById("premium-blowout")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 block w-full text-center py-2.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 text-xs font-bold rounded-xl transition-all shadow-lg shadow-amber-950/44"
              >
                Explore All 60K Features ↓
              </button>
            </div>
          </div>

          {/* Right Side: Original Tiers Catalogue Graphic Showcase */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center group">
            <a
              href={tierFlyer}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full max-w-xs rounded-2xl overflow-hidden border border-neutral-800 shadow-xl transition-all duration-300 group-hover:scale-[1.02]"
            >
              <img
                src={tierFlyer}
                alt="Riths Birthday Package Overview Catalogue"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                <span className="bg-neutral-900/90 text-amber-400 border border-amber-500/20 px-3 py-1.5 rounded-xl text-xs font-medium">
                  🔍 View Price Guide
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* SECTION 2: Interactive ₹60,000 Package Blowout Detail Section */}
        <div
          id="premium-blowout"
          className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/10 rounded-3xl border border-neutral-800 p-6 md:p-10 shadow-2xl space-y-10"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-800 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold text-amber-400">
                <span>✨</span> All-In-One Complete Celebration Layout
              </div>
              <h2 className="text-3xl font-serif text-white mt-3 font-bold">
                Premium Package Deep Dive
              </h2>

              {/* FIX 1: Enhanced contrast badge layout to make the 60,000 target stand out immediately */}
              <p className="text-gray-400 text-sm mt-2 flex flex-wrap items-center gap-1.5">
                Here is exactly what you receive inside our comprehensive
                <span className="text-amber-400 font-extrabold bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20 shadow-sm text-base">
                  ₹60,000
                </span>
                configuration:
              </p>
            </div>

            <a
              href={detailFlyer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-xs font-medium rounded-xl transition-colors text-gray-300 hover:text-white"
            >
              🔍 View Official Menu Poster
            </a>
          </div>

          {/* Feature Grid Evolved From Flyer Squares */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {premiumInclusions.map((inclusion, idx) => (
              <div
                key={idx}
                className="bg-neutral-950 p-4 rounded-xl border border-neutral-900 flex flex-col justify-between hover:border-neutral-800 transition-colors"
              >
                <div>
                  <span className="text-amber-400 text-xs font-bold tracking-wider uppercase block mb-1">
                    0{idx + 1}. {inclusion.title}
                  </span>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {inclusion.desc}
                  </p>
                </div>
                <span className="text-[10px] text-neutral-700 font-mono block mt-3 text-right">
                  INCLUDED
                </span>
              </div>
            ))}
          </div>

          {/* Exclusive Dynamic Bonus Selection Feature */}
          <div className="bg-neutral-950 rounded-2xl p-6 border border-neutral-900 max-w-3xl mx-auto space-y-4 shadow-inner">
            <div className="text-center">
              <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest">
                🎁 Exclusive Bonus — Choose Any One Free!
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Select your complimentary add-on pillar to attach to your active
                WhatsApp booking string below:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {[
                "Welcome Drinks for Guests",
                "90's Kids Mittai Kadai / Popcorn Stall",
                "Pre-Birthday Shoot Suite",
              ].map((bonus) => (
                <button
                  key={bonus}
                  onClick={() => setSelectedBonus(bonus)}
                  className={`p-4 rounded-xl border text-xs font-bold transition-all text-center flex items-center justify-center min-h-[56px] ${
                    selectedBonus === bonus
                      ? "bg-amber-500 text-neutral-950 border-amber-500 shadow-lg scale-[1.03]"
                      : "bg-neutral-900 text-gray-400 border-neutral-800 hover:border-neutral-700 hover:text-gray-200"
                  }`}
                >
                  {bonus} {selectedBonus === bonus ? " ✓" : ""}
                </button>
              ))}
            </div>
          </div>

          {/* Conversion Footer CTA Block */}
          <div className="text-center pt-4 space-y-4">
            <h3 className="text-xl font-bold text-white">
              Ready to lock in your child's magical timeline?
            </h3>
            <p className="text-gray-400 text-xs max-w-md mx-auto font-light">
              We operate under limited booking slots per weekend to guarantee
              premium execution parameters. Speaker arrangements are available
              seamlessly upon request.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/919092859794?text=Hi%20Riths%20Events!%20I%20want%20to%20reserve%20the%20₹60,000%20Premium%20Birthday%20Package.${selectedBonus ? `%20For%20the%20free%20exclusive%20bonus,%20I%20have%20selected:%20${encodeURIComponent(selectedBonus)}.` : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-black rounded-xl shadow-xl shadow-amber-950/30 transition-all text-sm tracking-wide"
              >
                Book This Package via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 3: Visual Gallery Section with Built-In Slideshow Lightbox */}
        <div className="mt-20 border-t border-neutral-900 pt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-white">
              Recent Birthday Celebrations
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Real snapshots of theme setups, balloon decors, and birthday
              environments executed by our team. Click any image to launch the
              fullscreen slideshow portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdayGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-900 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-60 object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="p-4 bg-neutral-900 flex justify-between items-center">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {item.alt}
                  </p>
                  <span className="text-[10px] text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Zoom 🔍
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FIX 2: Dynamic Native Lightbox Slideshow Overlay Portal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center backdrop-blur-md transition-opacity duration-300"
          onClick={() => setLightboxIndex(null)} // Click black spaces outside to close
        >
          {/* Close Action Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close layout portfolio"
          >
            <X size={24} />
          </button>

          {/* Main Slideshow Container Viewport */}
          <div className="relative w-full max-w-5xl px-4 flex items-center justify-center">
            {/* Left Nav Arrow */}
            <button
              className="absolute left-4 md:left-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full border border-neutral-800 transition-all z-10"
              onClick={showPrevImage}
              aria-label="Previous layout image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Target Display Asset image (Using object-contain ensures tall portraits are preserved completely) */}
            <div className="max-h-[80vh] flex items-center justify-center select-none">
              <img
                src={birthdayGallery[lightboxIndex].src}
                alt={birthdayGallery[lightboxIndex].alt}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-neutral-900 transition-all duration-300"
                onClick={(e) => e.stopPropagation()} // Disables random dismiss triggers on direct asset image clicks
              />
            </div>

            {/* Right Nav Arrow */}
            <button
              className="absolute right-4 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full border border-neutral-800 transition-all z-10"
              onClick={showNextImage}
              aria-label="Next layout image"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Footer Metadata & Index Indicator */}
          <div className="mt-4 text-center space-y-1 select-none">
            <p className="text-sm font-medium text-gray-200">
              {birthdayGallery[lightboxIndex].alt}
            </p>
            <p className="text-xs text-gray-500 font-mono">
              Layout Showcase {lightboxIndex + 1} of {birthdayGallery.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Birthdays;
