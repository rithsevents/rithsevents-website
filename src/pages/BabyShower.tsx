import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Utensils, Camera, Sparkles, Smartphone, Award } from 'lucide-react';

const BabyShower: React.FC = () => {
  // State for fullscreen native slideshow modal
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const packageFlyer = "assets/images/package-details/babyshower.webp";

  // Detailed breakdowns strictly mapped from your client's package graphic
  const sections = [
    {
      title: "1. Premium Catering",
      subtitle: "For 100 People",
      icon: <Utensils className="w-5 h-5 text-amber-400" />,
      items: [
        "5 Types of Varieties",
        "Authentic Rice, Sambar, Rasam, Moor",
        "Crispy Applam & Pickle",
        "Delicious Kesari & Savory Potato",
        "Individual Packaged Drinking Water Bottles",
        "Traditional Banana Leaves & Paper Table Wrappers Provided"
      ]
    },
    {
      title: "2. Photography & Video",
      subtitle: "Full Event Capture",
      icon: <Camera className="w-5 h-5 text-amber-400" />,
      items: [
        "Unlimited Soft Copies provided for the entire event",
        "200 Premium Photos curated per album",
        "High-end Canvera Album Type",
        "Non-Tearable Premium Album Sheets (Size: 12x36)",
        "Minimum 25 sheets guaranteed (Extra sheets at ₹50/sheet)",
        "Complete multi-camera videography with a master 30-min edited video"
      ]
    },
    {
      title: "3. Designer Decoration",
      subtitle: "Stunning Visual Setup",
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      items: [
        "Entrance: Elegant Balloon/Floral Entrance Arch setup",
        "Entrance: Custom Personalized Welcome Board on easel stand",
        "Stage: Customized Printed Banner background (Sizes: 12*7 ft to 15*7 ft)",
        "Stage: High-grade artificial flower layout design work",
        "Stage: Choice of modern Balloon décor OR Traditional Bangle décor",
        "Stage: Professional ambient stage lighting & vibrant 'Oh Baby' neon sign"
      ]
    },
    {
      title: "4. Digital & Photo Booth",
      subtitle: "Interactive Enhancements",
      icon: <Smartphone className="w-5 h-5 text-amber-400" />,
      items: [
        "Complimentary Premium E-Invitation designing with digital distribution cards",
        "3 Hours continuous Instant Photo Booth operations",
        "Unlimited Hard Copies + immediate soft copy access for guests",
        "DSLR Camera setup with a professional operator",
        "Elegant Blue Backdrop layout (customized backdrop available on request)",
        "Fun custom props included (wigs, quirky hats, festive masks, etc.)",
        "Sturdy Cardboard Frame setup with stand featuring your event's branding template"
      ]
    }
  ];

  // Set up your newly received gallery image paths here
  const showerGallery = [
    { id: 1, src: 'assets/images/gallery/babyshower/baby-shower-1.webp', alt: '' },
    { id: 2, src: 'assets/images/gallery/babyshower/baby-shower-2.webp', alt: '' },
    { id: 3, src: 'assets/images/gallery/babyshower/baby-shower-3.webp', alt: '' },
    { id: 4, src: 'assets/images/gallery/babyshower/baby-shower-4.webp', alt: '' },
    { id: 5, src: 'assets/images/gallery/babyshower/baby-shower-5.webp', alt: '' },
  ];

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? showerGallery.length - 1 : prev! - 1));
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === showerGallery.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-900">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 mb-16">
        <span className="text-amber-500 font-semibold tracking-widest text-sm uppercase">Exclusive Themes</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mt-2">
          Baby Shower Celebrations
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg font-light">
          Celebrate upcoming joy with beautifully managed environments, professional media archiving, and pristine catering menus.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Banner Hero Box */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/20 rounded-3xl border-2 border-amber-500/30 p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box: Value Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold text-amber-400">
                ✨ Zero Stress All-In-One Feature
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-white font-bold">
                The Complete Baby Shower Package
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
                A meticulously framed operational package combining high-fidelity artificial flower decoration assets, a complete 3-hour instant photo booth, dual-camera coverage, and multi-course traditional catering setups.
              </p>

              {/* Massive Exclusive Bonus Stall Highlight */}
              <div className="bg-neutral-950/80 rounded-2xl p-5 border border-amber-500/20 shadow-md flex items-start gap-4 max-w-xl">
                <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 shrink-0">
                  <Award className="w-6 h-6 text-amber-400 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wide">Included Exclusive Bonus</h4>
                  <p className="text-gray-300 text-xs mt-1 leading-relaxed">
                    Receive a completely operational, elegantly presented <strong className="text-white">Complimentary Bangle Stall</strong> configured directly within your venue space to enchant and delight family members.
                  </p>
                </div>
              </div>

              {/* Fixed High Contrast Pricing Container */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6 border-t border-neutral-800">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">Net All-Inclusive Rate</p>
                  <p className="text-4xl font-black text-amber-400 tracking-tight mt-1 bg-amber-500/10 px-4 py-1.5 rounded-xl border border-amber-500/20 inline-block shadow-inner">
                    ₹60,000/-
                  </p>
                </div>
                <a 
                  href="https://wa.me/919092859794?text=Hi%20Riths%20Events!%20I%20want%20to%20check%20availability%20for%20the%20₹60,000%20Baby%20Shower%20Package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold rounded-xl transition-all shadow-xl text-center text-sm tracking-wide"
                >
                  Check Available Dates via WhatsApp
                </a>
              </div>
            </div>

            {/* Right Box: Digital Poster Preview */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center group">
              <a 
                href={packageFlyer} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block w-full max-w-xs rounded-2xl overflow-hidden border border-neutral-800 shadow-xl transition-all duration-300 group-hover:scale-[1.02]"
              >
                <img 
                  src={packageFlyer} 
                  alt="Official Riths Baby Shower Catalogue Layout" 
                  className="w-full h-auto object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-neutral-900/90 text-amber-400 border border-amber-500/20 px-3 py-1.5 rounded-xl text-xs font-medium">
                    🔍 View Full Catalogue
                  </span>
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* Deep Dive Segmented Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {sections.map((sec, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800/60 rounded-2xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    {sec.icon}
                    <h3 className="text-base font-bold text-white">{sec.title}</h3>
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider bg-neutral-950 px-2 py-0.5 rounded text-neutral-400 border border-neutral-800">
                    {sec.subtitle}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {sec.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-amber-500 font-bold mt-0.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Portfolio Gallery Container */}
        <div className="pt-8 border-t border-neutral-900">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-white">Recent Baby Shower Portfolios</h3>
            <p className="text-gray-400 text-sm mt-1">Real snapshots of stage backdrops, traditional decor variants, and culinary setups. Click any image to launch the fullscreen portfolio slideshow loop.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showerGallery.map((img, index) => (
              <div 
                key={img.id} 
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-900 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30"
              >
                <img 
                  src={img.src} 
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-60 object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="p-4 bg-neutral-900 flex justify-between items-center">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{img.alt}</p>
                  <span className="text-[10px] text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">Launch 🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Slideshow Viewport Component */}
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
                src={showerGallery[lightboxIndex].src} 
                alt={showerGallery[lightboxIndex].alt} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-neutral-900 transition-all duration-300"
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
            <p className="text-sm font-medium text-gray-200">{showerGallery[lightboxIndex].alt}</p>
            <p className="text-xs text-gray-500 font-mono">
              Showcase Layout {lightboxIndex + 1} of {showerGallery.length}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default BabyShower;