import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Engagement: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Engagement specific image collection (Add more paths as your client sends them)
  const engagementGallery = [
    { id: 1, src: 'assets/images/gallery/wedding/decoration/Engagement - 1.webp', alt: 'Traditional Engagement Stage Layout' },
    { id: 2, src: 'assets/images/gallery/wedding/decoration/Engagement - 2.webp', alt: 'Elegant Ring Ceremony Backdrop' },
  ];

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? engagementGallery.length - 1 : prev! - 1));
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === engagementGallery.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 mb-12">
        <span className="text-amber-500 font-semibold tracking-widest text-sm uppercase">
          Forever Begins Here
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mt-2">
          Elegant Engagement Planning
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg font-light">
          Celebrate your promise with a beautifully managed, zero-stress engagement experience featuring premium decors and signature catering.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 1. Flagship Package Feature */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/20 rounded-3xl border-2 border-amber-500/30 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-500 text-neutral-950 font-bold text-xs px-6 py-2 uppercase tracking-widest rounded-bl-2xl z-10">
            Limited Time Offer
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Premium Inclusions Info */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-amber-400 font-bold">
                  The Dream Engagement Package
                </h2>
                <p className="text-sm text-gray-400 font-medium mt-1">
                  Complete Premium Experience tailored flawlessly for <span className="text-amber-400 font-bold">100 Guests</span>
                </p>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                One clear price. Zero hidden calculations. We organize the entire technical production, premium audio setups, media capture, and delightful catering service so your family can focus completely on the couple.
              </p>

              {/* Package Inclusion Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { icon: "🌸", title: "Floral Stage Decor" },
                  { icon: "🎈", title: "Grand Entrance Arch" },
                  { icon: "📸", title: "Photo & Video Suite" },
                  { icon: "🎂", title: "3KG Designer Cake" },
                  { icon: "🎆", title: "Cold Pyro Effects" },
                  { icon: "💁‍♂️", title: "FREE Food Service" },
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

              {/* Pricing & Custom Action Block */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6 border-t border-neutral-800">
                <div className="flex items-baseline gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 line-through">
                      Worth ₹1,00,000+
                    </p>
                    <p className="text-4xl font-black text-amber-400 tracking-tight mt-0.5">
                      ₹75,000
                    </p>
                  </div>
                  <span className="bg-amber-500/10 text-amber-400 text-xs px-2 py-1 rounded font-bold uppercase border border-amber-500/20">
                    Save 25%
                  </span>
                </div>
                <a
                  href="https://wa.me/919092859794?text=Hi%20Riths%20Events!%20I'm%20interested%20in%20booking%20the%20Dream%20Engagement%20Package%20(75k)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl transition-all shadow-xl text-center text-sm tracking-wide"
                >
                  Book This Package via WhatsApp
                </a>
              </div>
            </div>

            {/* Right Column: Key Details Checklists */}
            <div className="lg:col-span-4 bg-neutral-950/60 p-5 rounded-2xl border border-neutral-800/80 space-y-4">
              <h4 className="text-xs font-bold uppercase text-amber-500 tracking-widest">
                ⭐ Premium Assets Included
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Media Package:</strong> 200 High-Res Photos + 25 Sheet Premium Album + 30-Min Highlight Film.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Staging:</strong> Bride & Groom Designer Sofa Seating + Name Welcome Board.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Special Effects:</strong> Red Carpet Couple Entry + Sound System with Wireless Mics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">🎁</span>
                  <span className="text-amber-400 font-semibold">FREE Premium Couple Photo Frame Included!</span>
                </li>
              </ul>
              <div className="pt-2 text-[10px] text-gray-500 border-t border-neutral-900 italic">
                *Note: Candid Photography & Cinematic Video upgrades can be appended upon request.
              </div>
            </div>
          </div>
        </div>

        {/* 2. Structured Engagement Menu Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Menu Feed */}
          <div className="lg:col-span-2 bg-neutral-900 rounded-2xl border border-neutral-800 p-6 md:p-8 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>🍽️</span> Included Gourmet Banquet Menu (100 Leaves)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { label: "Welcome Drink", desc: "Refreshing welcome beverage served clean to all arriving attendees" },
                { label: "Gulab Jamun", desc: "Traditional melt-in-the-mouth sweet starters served warm" },
                { label: "Signature Veg Biryani", desc: "Aromatic, long-grain basmati rice layout rich with spices" },
                { label: "Chapathi & Channa Masala", desc: "Soft pulled bread accompanied by flavorful North-Indian spiced gravy" },
                { label: "Chilly Parotta", desc: "Perfectly tossed, crispy shredded spicy street style inclusion" },
                { label: "Sambar Idly", desc: "Classic soft mini button idlies completely submerged in traditional sambar" },
                { label: "Dual Chutney Spread", desc: "Freshly prepared authentic White Coconut Chutney & Zesty Green Mint Chutney" },
                { label: "Cool Onion Raita & Water", desc: "Refreshing yogurt accompaniment along with structural mineral water service" },
              ].map((food, index) => (
                <div key={index} className="bg-neutral-950 p-4 rounded-xl border border-neutral-800/60 flex flex-col justify-between">
                  <div>
                    <span className="text-amber-400 text-xs font-bold tracking-wider uppercase block mb-1">Item 0{index + 1}</span>
                    <h4 className="text-base font-semibold text-white">{food.label}</h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">{food.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Setup Notes panel */}
          <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>📋</span> Booking Conditions
            </h3>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
                <span className="block font-semibold text-gray-200 mb-1">Vegetarian / Non-Vegetarian Options</span>
                Both options are fully configurable within the package blueprint structure. Let our coordinators know your preference.
              </div>
              <div className="p-3 bg-neutral-950 rounded-xl border border-neutral-800">
                <span className="block font-semibold text-gray-200 mb-1">Catering Personnel</span>
                Professional table management, food handling, and breakdown cleanings are handled entirely by our internal squad for free.
              </div>
            </div>
          </div>
        </div>

        {/* 3. Portfolio Showcase Gallery Grid */}
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-serif text-white">
              Engagement Design Variations
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Real high-definition layouts captured live at premium halls and backyards managed by Riths Events.
            </p>
          </div>

          {engagementGallery.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {engagementGallery.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
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
          ) : (
            <div className="text-center py-12 text-neutral-500 border-2 border-dashed border-neutral-800 rounded-xl">
              Images folder updating soon.
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal Engine Overlay */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center backdrop-blur-md transition-opacity duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-5xl px-4 flex items-center justify-center">
            <button 
              className="absolute left-4 md:left-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full border border-neutral-800 transition-all z-10"
              onClick={showPrevImage}
            >
              <ChevronLeft size={28} />
            </button>

            <div className="max-h-[80vh] flex items-center justify-center select-none">
              <img 
                src={engagementGallery[lightboxIndex].src} 
                alt={engagementGallery[lightboxIndex].alt} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-neutral-900"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <button 
              className="absolute right-4 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full border border-neutral-800 transition-all z-10"
              onClick={showNextImage}
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="mt-4 text-center space-y-1 select-none">
            <p className="text-sm font-medium text-gray-200">
              {engagementGallery[lightboxIndex].alt}
            </p>
            <p className="text-xs text-gray-500 font-mono">
              Item {lightboxIndex + 1} of {engagementGallery.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Engagement;