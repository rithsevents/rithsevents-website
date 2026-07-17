import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Utensils, Users, Award, MapPin, Phone } from 'lucide-react';

type MenuTab = 'dinner' | 'tiffin' | 'lunch' | 'snacks';

const Catering: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>('dinner');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const menuFlyer = "assets/images/package-details/caterer-1.webp";
  const promoFlyer = "assets/images/package-details/caterer-2.webp";

  // Structured menu data perfectly extracted from caterer-1.webp
  const menuData = {
    dinner: {
      title: "Dinner Reception",
      capacity: "Ideal for 450 Members",
      items: [
        "Rasmalai", "Gobi 65", "Onion Raita", "Veg Biriyani", "Chapati", 
        "Paneer Butter Masala", "Mixed Vegetable Poriyal", "Potato Peas Roast", 
        "Bisi Bele Bath", "Potato Chips", "Rasam", "Vathakuzhambu", 
        "Mango Pickle", "Curd Rice (Bagalabath)", "Steamed White Rice", 
        "Abukatta Ice Cream", "Water Bottle", "Beeda"
      ]
    },
    tiffin: {
      title: "Traditional Tiffin",
      capacity: "Ideal for 200 Members",
      items: [
        "Coffee", "Fruit Kesari", "Idli", "Uthappam", "Ven Pongal", 
        "Sambar", "Coconut Chutney", "Kara Chutney", "Medu Vada", "Water Bottle"
      ]
    },
    lunch: {
      title: "Grand South Indian Lunch",
      capacity: "Ideal for 100 Members",
      items: [
        "Paruppu Payasam (Akkaravadisal)", "Paruppu", "Ghee", "Curd Vada", 
        "Senai Kizhangu Roast", "Kara Boondi", "Aviyal", "Sambar", "Rasam", 
        "Vathakuzhambu", "Curd", "Mango Pickle", "Appalam", "White Rice", "Water (Cup)"
      ]
    },
    snacks: {
      title: "High-Tea Snacks",
      capacity: "Ideal for 50 Members",
      items: [
        "Bhaji & Bonda", "Kara Chutney", "Tea & Coffee"
      ]
    }
  };

  // Setup your banana leaf service portfolio shots here
  const cateringGallery = [
    { id: 1, src: 'assets/images/gallery/catering/catering-1.webp', alt: '' },
    { id: 2, src: 'assets/images/gallery/catering/catering-2.webp', alt: '' }
  ];

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? cateringGallery.length - 1 : prev! - 1));
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === cateringGallery.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral-950 text-white selection:bg-amber-500 selection:text-neutral-900">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 mb-16">
        <span className="text-amber-500 font-semibold tracking-widest text-sm uppercase">Generational Legacy</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mt-2">
          Yogaambiga Catering Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-lg font-light">
          Serving pure vegetarian culinary excellence across generations with authentic flavors and impeccable hospitality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* SECTION 1: Brand Poster & Core Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Tamil Promotional Flyer Graphic Presentation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center group">
            <a 
              href={promoFlyer} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative block w-full max-w-sm rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-300 group-hover:scale-[1.01]"
            >
              <img 
                src={promoFlyer} 
                alt="Yogaambiga Caterers Official Brand Poster" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                <span className="bg-neutral-900/90 text-amber-400 border border-amber-500/20 px-4 py-2 rounded-xl text-xs font-semibold">
                  🔍 View Complete Service Guide
                </span>
              </div>
            </a>
          </div>

          {/* Right: Pitch Deck Content & Core Specialities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold text-amber-400">
              👑 Generations of Unmatched Trust
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold leading-tight">
              More Than Just Food—We Craft Lasting Traditions
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Following an ancestral lineage of pristine catering service, Yogaambiga Caterers specializes in authentic pure-vegetarian menus tailored dynamically for weddings, thread ceremonies, baby showers, engagements, and corporate banquets.
            </p>

            {/* Core Values Rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { icon: <Award className="w-5 h-5 text-amber-400" />, title: "4th Generation Legacy", desc: "Time-tested recipes passed down with uncompromising quality guidelines." },
                { icon: <Utensils className="w-5 h-5 text-amber-400" />, title: "100% Pure Vegetarian", desc: "Pristine, hygienic, and authentic traditional preparation standards." },
                { icon: <Users className="w-5 h-5 text-amber-400" />, title: "End-to-End Arrangements", desc: "Allied options for music, welcome hostesses, and venue setup." },
                { icon: <MapPin className="w-5 h-5 text-amber-400" />, title: "Pan-India Operations", desc: "Proudly serving Chennai, Tamil Nadu, and locations across India." }
              ].map((value, idx) => (
                <div key={idx} className="bg-neutral-900/50 p-4 rounded-xl border border-neutral-800/60 space-y-1.5">
                  <div className="flex items-center gap-2">
                    {value.icon}
                    <h4 className="text-sm font-bold text-gray-200">{value.title}</h4>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed font-light">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION 2: Dynamic Interactive Tabbed Menu Engine */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 md:p-10 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-800 pb-6">
            <div>
              <h3 className="text-2xl font-serif text-white font-bold">Explore Our Curated Menus</h3>
              <p className="text-gray-400 text-xs mt-1">Select an operational tier below to view real items structured from our catalogue:</p>
            </div>
            
            <a 
              href={menuFlyer} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 text-xs font-medium rounded-xl transition-colors text-gray-300 hover:text-white"
            >
              📄 View Official Print Menu Card
            </a>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-800/40 pb-2">
            {(Object.keys(menuData) as MenuTab[]).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-5 py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-200 ${
                  activeTab === tabKey
                    ? 'bg-amber-500 text-neutral-950 font-black shadow-lg scale-[1.02]'
                    : 'bg-neutral-950 text-gray-400 border border-neutral-800 hover:border-neutral-700 hover:text-gray-200'
                }`}
              >
                {menuData[tabKey].title}
              </button>
            ))}
          </div>

          {/* Rendered Tab Data Grid */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between bg-neutral-950 px-4 py-2 rounded-lg border border-neutral-800/40 text-xs text-neutral-400 font-mono">
              <span>🍽️ FOOD MENU </span>
              <span className="text-amber-400 font-semibold">{menuData[activeTab].capacity}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {menuData[activeTab].items.map((foodItem, index) => (
                <div 
                  key={index} 
                  className="bg-neutral-950/40 px-4 py-3.5 rounded-xl border border-neutral-900 flex items-center gap-3 hover:border-neutral-800 transition-colors"
                >
                  <span className="text-xs font-mono font-bold text-amber-500/70">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-sm font-medium text-gray-200">{foodItem}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* SECTION 3: Visual Servings Gallery with Lightbox Slideshow */}
        <div className="pt-8 border-t border-neutral-900">
          <div className="mb-8">
            <h3 className="text-2xl font-serif text-white">Traditional Servings & Presentation</h3>
            <p className="text-gray-400 text-sm mt-1">Real snapshots of premium banana leaf grand feasts and buffet setups executed by our hospitality crew. Click any item to explore full aspect details.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cateringGallery.map((img, index) => (
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
                  <span className="text-[10px] text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">Launch View 🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: Dedicated Contact Footer */}
        <div className="text-center bg-gradient-to-r from-amber-500/5 via-neutral-900 to-amber-500/5 rounded-3xl border border-neutral-800 p-8 space-y-4">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white">Planning a Family Function or Corporate Gala?</h3>
          <p className="text-gray-400 text-xs max-w-md mx-auto font-light leading-relaxed">
            Connect directly with our operations desk to customize menus according to guest volume tiers, taste preferences, or special dietary guidelines.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/919841786785?text=Hi%20Yogaambiga%20Caterers!%20I%20would%20like%20to%20enquire%20about%20catering%20services%20for%20my%20upcoming%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-neutral-950 font-black rounded-xl shadow-xl transition-all text-xs uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 fill-current" /> Contact Operations Desk
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Slideshow Modal */}
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
                src={cateringGallery[lightboxIndex].src} 
                alt={cateringGallery[lightboxIndex].alt} 
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
            <p className="text-sm font-medium text-gray-200">{cateringGallery[lightboxIndex].alt}</p>
            <p className="text-xs text-gray-500 font-mono">
              Showcase Position {lightboxIndex + 1} of {cateringGallery.length}
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Catering;