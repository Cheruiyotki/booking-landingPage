import React, { useState } from 'react';
import { MapPin, Heart, Star, CheckCircle, Phone, Menu, X, ArrowRight, Instagram } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Placeholder data - In a real app, this comes from a JSON file or API
  const packages = [
    {
      id: 1,
      title: "Nyeri Romantic Escape",
      location: "Nyeri, Mt Kenya Region",
      price: "KES 15,000",
      image: "/api/placeholder/400/300", // Replace with real image
      features: ["2 Nights Accommodation", "Rose Petal Setup", "Welcome Wine & Chocolates", "Mountain View"],
      tag: "Best Seller"
    },
    {
      id: 2,
      title: "Naivasha Group Vibes",
      location: "Naivasha, Rift Valley",
      price: "KES 25,000",
      image: "/api/placeholder/400/300", // Replace with real image
      features: ["Villa for 6 Pax", "Private Chef (1 Dinner)", "Swimming Pool", "Bonfire Setup"],
      tag: "Group Favorite"
    },
    {
      id: 3,
      title: "Nairobi City Staycation",
      location: "Westlands, Nairobi",
      price: "KES 8,500",
      image: "/api/placeholder/400/300", // Replace with real image
      features: ["Luxury Studio", "Rooftop Pool Access", "Netflix & Chill Snack Pack", "Late Checkout"],
      tag: "Quick Getaway"
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-teal-600">LuxeScapes<span className="text-gray-800">KE</span></span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#packages" className="text-gray-600 hover:text-teal-600 font-medium">Packages</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-teal-600 font-medium">How it Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-teal-600 font-medium">Reviews</a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-full font-medium hover:bg-teal-700 transition">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#packages" className="text-gray-600 font-medium">Packages</a>
              <a href="#how-it-works" className="text-gray-600 font-medium">How it Works</a>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-medium w-full">
                Book via WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
        >
          <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-10">
            <div className="inline-block bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ✨ The #1 Travel Concierge in Kenya
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Don't Just Book a Room. <br/> Book an <span className="text-teal-400">Experience.</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              We verify the homes, set up the surprises, and handle the details. You just show up and enjoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-700 transition flex items-center justify-center gap-2">
                Plan My Getaway <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition">
                View Destinations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Verified Listings</h3>
            <p className="text-gray-600">No catfishing. We physically inspect every property before recommending it.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Custom Experiences</h3>
            <p className="text-gray-600">Birthdays, anniversaries, or proposals. We handle decor, cake, and wine.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Zero Stress</h3>
            <p className="text-gray-600">From transport to check-in, we act as your personal travel assistant.</p>
          </div>
        </div>
      </div>

      {/* Featured Packages */}
      <div id="packages" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Curated Getaways</h2>
          <p className="text-xl text-gray-600">Hand-picked stays with exclusive perks included.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 bg-gray-200">
                {/* Replace src with your images */}
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {pkg.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin size={16} className="mr-1" />
                  {pkg.location}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 block">Starting form</span>
                    <span className="text-lg font-bold text-teal-600">{pkg.price}</span>
                  </div>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA / Footer Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for your next adventure?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Tell us where you want to go and what you're celebrating. We'll send you 3 custom options within an hour.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
              <Phone size={20} /> Chat on WhatsApp
            </button>
            <button className="bg-transparent border border-gray-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <Instagram size={20} /> DM on Instagram
            </button>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 LuxeScapes Kenya. All rights reserved.
          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;