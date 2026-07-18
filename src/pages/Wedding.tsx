import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Weddings: React.FC = () => {
  // State to track which image index is open in fullscreen modal (null = closed)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const weddingFlyer = "assets/images/package-details/Wedding-package.webp";
  
  const weddingGallery = [
    { id: 1, src: 'assets/images/gallery/wedding/decoration/decoration-1.webp', alt: '' },
    { id: 2, src: 'assets/images/gallery/wedding/decoration/decoration-2.webp', alt: '' },
    { id: 3, src: 'assets/images/gallery/wedding/decoration/decoration-3.webp', alt: '' },
    { id: 4, src: 'assets/images/gallery/wedding/decoration/decoration-4.webp', alt: '' },
    { id: 5, src: 'assets/images/gallery/wedding/decoration/decoration-5.webp', alt: '' },
    { id: 6, src: 'assets/images/gallery/wedding/decoration/decoration-6.webp', alt: '' },
    { id: 7, src: 'assets/images/gallery/wedding/decoration/decoration-7.webp', alt: '' },
    { id: 9, src: 'assets/images/gallery/wedding/decoration/decoration-9.webp', alt: '' },
    { id: 10, src: 'assets/images/gallery/wedding/decoration/decoration-10.webp', alt: '' },
    { id: 11, src: 'assets/images/gallery/wedding/decoration/Engagement - 1.webp', alt: '' },
    { id: 12, src: 'assets/images/gallery/wedding/decoration/Engagement - 2.webp', alt: '' },
  ];

  // Slideshow Navigation Handlers
  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents clicking the navigation target from dismissing the overlay modal
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? weddingGallery.length - 1 : prev! - 1));
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === weddingGallery.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 mb-12">
        <span className="text-amber-500 font-semibold tracking-widest text-sm uppercase">
          Signature Experiences
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mt-2">
          Luxury Wedding Planning
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg font-light">
          Bringing your dream wedding to life with flawless end-to-end
          management, premium styling, and generational catering expertise.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Flagship All-Inclusive Package Feature with Flyer Image Integration */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/20 rounded-3xl border-2 border-amber-500/30 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-500 text-neutral-950 font-bold text-xs px-6 py-2 uppercase tracking-widest rounded-bl-2xl z-10">
            Official Package
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text Details (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-amber-400 font-bold">
                The Grand Wedding Package
              </h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-xl">
                Our signature completely managed solution. We take care of every
                core technical, aesthetic, and culinary pillar to deliver an
                elegant, stress-free celebration for your family.
              </p>

              {/* Highlighted Services Pillars from the Flyer */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: "✨", title: "Complete Decoration" },
                  { icon: "💌", title: "Premium Invitations" },
                  { icon: "📸", title: "Photo & Video Suite" },
                  { icon: "🍽️", title: "Yogaambiga Catering" },
                  { icon: "💄", title: "Professional Makeup" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-neutral-950 p-3 rounded-xl border border-neutral-800"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs font-medium text-gray-200">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pricing & CTA Block */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6 border-t border-neutral-800">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Net Package Rate
                  </p>
                  <p className="text-4xl font-black text-amber-400 tracking-tight mt-1">
                    ₹2,99,999
                  </p>
                </div>
                <a
                  href="https://wa.me/919092859794?text=Hi%20Riths%20Events!%20I'm%20interested%20in%20booking%20the%20Grand%20Wedding%20Package%20(2.99L)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl transition-all shadow-xl text-center text-sm tracking-wide"
                >
                  Check Available Dates via WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Interactive Flyer Image Showcase (5 Cols) */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center justify-center group">
              <a
                href={weddingFlyer}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block w-full max-w-sm rounded-2xl overflow-hidden border border-neutral-700/50 shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:border-amber-500/50"
              >
                <img
                  src={weddingFlyer}
                  alt="Riths Event Official Wedding Package Flyer"
                  className="w-full h-auto object-cover"
                />
                {/* Overlaid Hint to indicate image is clickable */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-neutral-900/90 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-xl text-xs font-semibold shadow-md">
                    🔍 Click to View Full Image
                  </span>
                </div>
              </a>
              <p className="text-neutral-500 text-[11px] mt-2 italic">
                *Official digital catalogue layout attached above
              </p>
            </div>
          </div>
        </div>

        {/* 2. Custom Pricing & Itemized Breakdowns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📋</span> Tailored Menu & Inclusions (Custom Quote Example)
            </h3>

            <div className="space-y-6 text-sm">
              <div className="border-b border-neutral-800 pb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-semibold text-amber-400">
                    Premium Catering Layout
                  </h4>
                  <span className="text-white font-bold">₹250 / Leaf</span>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Estimated based on 400 Guests. Featuring traditional Biryani,
                  Chicken 65, Raitha, Brinjal, Halwa, Leaf Water service, and
                  premium Ice Cream. Includes 10 dedicated catering staff
                  personnel.
                </p>
              </div>

              <div className="border-b border-neutral-800 pb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-base font-semibold text-amber-400">
                    Media & Photography Package
                  </h4>
                  <span className="text-white font-bold">₹25,000</span>
                </div>
                <p className="text-gray-400">
                  Full coverage package optimizing both Church ceremonial
                  requirements and the grand reception stage setup.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <span className="block font-medium text-gray-200 mb-1">
                    Welcome Hospitality
                  </span>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>2 Professional Hostesses</span>
                    <span className="text-amber-400 font-semibold">₹2,500</span>
                  </div>
                </div>

                <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800">
                  <span className="block font-medium text-gray-200 mb-1">
                    Custom Return Gifts
                  </span>
                  <div className="flex justify-between items-center text-xs text-gray-400">
                    <span>Sourced for 300 Nos</span>
                    <span className="text-amber-400 font-semibold">
                      ₹45 / Bag
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add-ons Panel */}
          <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 shadow-xl space-y-6">
            <div>
              <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                <span>✨</span> Included Complimentary
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Dynamic Flex
                  Banner Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Elegant Floral
                  Entrance Setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> Custom Premium
                  E-Invitation
                </li>
              </ul>
            </div>

            <div className="border-t border-neutral-800 pt-6">
              <h3 className="text-base font-bold text-white mb-3">
                Custom Enhancements
              </h3>
              <div className="space-y-2.5 text-xs text-gray-400">
                <div className="flex justify-between py-1 border-b border-neutral-800/50">
                  <span>Chandamelam (6 Mini Set)</span>
                  <span className="text-amber-400 font-medium">+ ₹15,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/50">
                  <span>Pre-Wedding Shoot Suite</span>
                  <span className="text-amber-400 font-medium">+ ₹6,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-800/50">
                  <span>Interactive Insta Photo Booth</span>
                  <span className="text-amber-400 font-medium">+ ₹7,000</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Designer Tiered Wedding Cake</span>
                  <span className="text-amber-400 font-medium">₹3,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid Section */}
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-serif text-white">
              Our Work Portfolio
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Real captures from luxury wedding receptions and traditional
              ceremonies managed by our teams. Click any layout to launch the standalone gallery loop.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30"
              >
                <img
                  src={item.src}
                  alt={item.alt || "Luxury Event Decor"}
                  loading="lazy"
                  className="w-full h-60 object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="p-4 bg-neutral-900 flex items-center justify-between">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {item.alt}
                  </p>
                  <span className="text-[10px] text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">Zoom 🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Slideshow Modal Rendering Overlay Portal */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center backdrop-blur-md transition-opacity duration-300"
          onClick={() => setLightboxIndex(null)} // Allows dimissing when clicking peripheral background spaces
        >
          {/* Close Action Trigger */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close portfolio modal"
          >
            <X size={24} />
          </button>

          {/* Core Navigation Slider Layer */}
          <div className="relative w-full max-w-5xl px-4 flex items-center justify-center">
            
            {/* Left Prev Control */}
            <button 
              className="absolute left-4 md:left-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full border border-neutral-800 transition-all z-10"
              onClick={showPrevImage}
              aria-label="Previous portfolio asset"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Target Display Asset Area (Using object-contain ensures tall vertical captures don't stretch) */}
            <div className="max-h-[80vh] flex items-center justify-center select-none">
              <img 
                src={weddingGallery[lightboxIndex].src} 
                alt={weddingGallery[lightboxIndex].alt || "Wedding Decor"} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-neutral-900 transition-all duration-300"
                onClick={(e) => e.stopPropagation()} // Disables event bubbling from close triggers on image frames
              />
            </div>

            {/* Right Next Control */}
            <button 
              className="absolute right-4 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full border border-neutral-800 transition-all z-10"
              onClick={showNextImage}
              aria-label="Next portfolio asset"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Footer Metadata Identifiers */}
          <div className="mt-4 text-center space-y-1 select-none">
            <p className="text-sm font-medium text-gray-200">
              {weddingGallery[lightboxIndex].alt || `Design Concept ${weddingGallery[lightboxIndex].id}`}
            </p>
            <p className="text-xs text-gray-500 font-mono">
              Showcase Item {lightboxIndex + 1} of {weddingGallery.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weddings;