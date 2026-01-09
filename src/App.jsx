import React, { useState } from 'react';
import { 
  MapPin, Heart, Star, CheckCircle, Phone, Menu, X, ArrowRight, Instagram, 
  Calendar, MessageCircle, CreditCard, Quote 
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- DATA SECTIONS ---
  
  const packages = [
    {
      id: 1,
      title: "Nyeri Romantic Escape",
      location: "Nyeri, Mt Kenya Region",
      price: "KES 15,000",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["2 Nights Accommodation", "Rose Petal Setup", "Welcome Wine & Chocolates", "Mountain View"],
      tag: "Best Seller"
    },
    {
      id: 2,
      title: "Naivasha Group Vibes",
      location: "Naivasha, Rift Valley",
      price: "KES 25,000",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Villa for 6 Pax", "Private Chef (1 Dinner)", "Swimming Pool", "Bonfire Setup"],
      tag: "Group Favorite"
    },
    {
      id: 3,
      title: "Nairobi City Staycation",
      location: "Westlands, Nairobi",
      price: "KES 8,500",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      features: ["Luxury Studio", "Rooftop Pool Access", "Netflix & Chill Snack Pack", "Late Checkout"],
      tag: "Quick Getaway"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Stacy Wanjiku",
      role: "Surprise Birthday",
      text: "I was so stressed trying to find a legit place in Nanyuki for my boyfriend. LuxeScapes handled everything, even the cake! It looked exactly like the photos.",
      rating: 5
    },
    {
      id: 2,
      name: "Brian Omondi",
      role: "Anniversary Trip",
      text: "The 'Private Chef' package in Naivasha is a game changer. Worth every shilling. We didn't lift a finger all weekend.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah & The Girls",
      role: "Girls Trip",
      text: "Safe, clean, and the wine was waiting for us when we arrived. We are definitely booking the Diani package next.",
      rating: 4
    }
  ];

  const steps = [
    {
      id: 1,
      icon: <MessageCircle size={32} />,
      title: "1. Tell us the Vibe",
      desc: "Don't search for hours. Just text us: 'I need a chill spot for 2 in Naivasha' or 'I need a party villa for 10'."
    },
    {
      id: 2,
      icon: <Calendar size={32} />,
      title: "2. Get 3 Curated Options",
      desc: "Within 60 mins, we send you 3 verified options that match your budget and occasion. No catfishing."
    },
    {
      id: 3,
      icon: <CreditCard size={32} />,
      title: "3. Book & Relax",
      desc: "Pay securely. We handle the host, the decor, and the directions. You just show up."
    }
  ];

  // --- SCROLL HANDLER ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      
      {/* --- NAVIGATION --- */}
      <nav className="bg-white shadow-sm fixed w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="text-2xl font-bold text-teal-600">LuxeScapes<span className="text-gray-800">KE</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('packages')} className="text-gray-600 hover:text-teal-600 font-medium">Packages</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-teal-600 font-medium">How it Works</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-teal-600 font-medium">Reviews</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-700 transition transform hover:scale-105"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('packages')} className="text-left text-gray-600 font-medium py-2">Packages</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-gray-600 font-medium py-2">How it Works</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-600 font-medium py-2">Reviews</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium w-full mt-2"
              >
                Book via WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <div id="hero" className="relative pt-16">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
        >
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
            <div className="inline-block bg-teal-100/90 backdrop-blur text-teal-900 px-4 py-1 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              ✨ The #1 Travel Concierge in Kenya
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Don't Just Book a Room. <br/> Book an <span className="text-teal-400">Experience.</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-sm">
              We verify the homes, set up the surprises, and handle the details. You just show up and enjoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-teal-500/50"
              >
                Plan My Getaway <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition shadow-lg"
              >
                View Destinations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- TRUST INDICATORS --- */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4 hover:bg-teal-50 rounded-xl transition cursor-default">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Verified Listings</h3>
            <p className="text-gray-600">No catfishing. We physically inspect every property before recommending it.</p>
          </div>
          <div className="p-4 hover:bg-red-50 rounded-xl transition cursor-default">
            <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Custom Experiences</h3>
            <p className="text-gray-600">Birthdays, anniversaries, or proposals. We handle decor, cake, and wine.</p>
          </div>
          <div className="p-4 hover:bg-blue-50 rounded-xl transition cursor-default">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Zero Stress</h3>
            <p className="text-gray-600">From transport to check-in, we act as your personal travel assistant.</p>
          </div>
        </div>
      </div>

      {/* --- HOW IT WORKS SECTION (NEW) --- */}
      <div id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Your perfect weekend in 3 simple steps.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- PACKAGES SECTION --- */}
      <div id="packages" className="py-20 max-w-7xl mx-auto px-4 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curated Getaways</h2>
          <p className="text-xl text-gray-600">Hand-picked stays with exclusive perks included.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="relative h-56 bg-gray-200">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition duration-700 hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                  {pkg.tag}
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center">
                   <MapPin size={14} className="mr-1" /> {pkg.location}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600 text-sm">
                      <div className="w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                        <CheckCircle size={12} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 block uppercase tracking-wide">Starting from</span>
                    <span className="text-xl font-bold text-teal-600">{pkg.price}</span>
                  </div>
                  <button onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- REVIEWS / TESTIMONIALS SECTION (NEW) --- */}
      <div id="testimonials" className="py-20 bg-teal-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Happy Travelers</h2>
            <p className="text-teal-200 text-lg">Don't take our word for it. Here's what Kenyans are saying.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                <div className="text-teal-400 mb-4">
                  <Quote size={40} />
                </div>
                <p className="text-gray-100 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <span className="text-sm text-teal-300">{review.role}</span>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CONTACT / FOOTER SECTION --- */}
      <div id="contact" className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for your next adventure?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Tell us where you want to go and what you're celebrating. We'll send you 3 custom options within an hour.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/254700000000?text=Hi%20LuxeScapes,%20I'm%20interested%20in%20planning%20a%20trip!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/20"
            >
              <Phone size={20} /> Chat on WhatsApp
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border border-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
            >
              <Instagram size={20} /> DM on Instagram
            </a>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
            <span>© 2025 LuxeScapes Kenya. All rights reserved.</span>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-teal-400">Privacy Policy</a>
               <a href="#" className="hover:text-teal-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;