
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sampleItems = [
    {
      id: 1,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Helper to close menu on route changes or overlay
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };
  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  React.useEffect(() => {
    // Escape closes mobile menu
    const escHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleMobileMenuClose();
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", escHandler);
    } else {
      window.removeEventListener("keydown", escHandler);
    }
    return () => window.removeEventListener("keydown", escHandler);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sample 1 NAV Bar */}
      <nav
        className="flex items-center justify-between bg-[#101026] shadow-lg px-4 py-4 rounded-b-2xl relative z-50"
        style={{ borderBottom: "1px solid #24245f" }}
      >
        <span className="font-playfair text-2xl md:text-3xl font-extrabold gradient-text drop-shadow-sm select-none tracking-tight animate-fade-in">
          Curated Store - 7v
        </span>
        {/* Mobile Nav Button */}
        <div className="md:hidden relative ml-auto z-[101]">
          <button
            className="text-cyan-200 hover:text-cyan-400 focus:outline-none px-2 py-2 rounded-lg transition"
            aria-label="Open navigation"
            onClick={handleMobileMenuOpen}
          >
            <svg
              width="34"
              height="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#41d1ff"
                strokeWidth="1.9"
                fill="#101026"
              />
              <polyline
                points="8,10 12,14 16,10"
                stroke="#41d1ff"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Mobile menu overlay */}
          {mobileMenuOpen && (
            <>
              <div
                onClick={handleMobileMenuClose}
                className="fixed inset-0 z-[100] bg-black/50 pointer-events-auto opacity-100 transition-opacity duration-200"
                style={{ backdropFilter: "blur(1.5px)" }}
              />
              <div className="fixed inset-0 top-0 left-0 w-full h-full bg-[#181854] bg-opacity-95 z-[200] flex flex-col items-center justify-center animate-fade-in">
                <button
                  className="absolute top-6 right-8 text-cyan-300 hover:text-cyan-400 text-3xl font-bold px-4 py-2"
                  aria-label="Close navigation"
                  onClick={handleMobileMenuClose}
                >
                  &times;
                </button>
                <Link
                  to="/"
                  onClick={handleMobileMenuClose}
                  className="block px-8 py-5 font-bold text-2xl text-white transition hover:bg-cyan-700/60 rounded-lg w-full text-center"
                >
                  Home
                </Link>
                <a
                  href="#reviews"
                  onClick={handleMobileMenuClose}
                  className="block px-8 py-5 font-bold text-2xl text-white transition hover:bg-cyan-700/60 rounded-lg w-full text-center"
                >
                  Reviews
                </a>
                <a
                  href="mailto:info@curatedstore.com"
                  className="block px-8 py-5 font-bold text-2xl bg-gradient-to-r from-fuchsia-300 to-cyan-400 text-white hover:text-white transition rounded-lg w-full text-center"
                  onClick={handleMobileMenuClose}
                >
                  Contact Us
                </a>
              </div>
            </>
          )}
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-7 items-center text-lg font-medium navbar-links">
          <Link
            to="/"
            className="text-white/90 hover:gradient-text px-1.5 py-0.5 transition-all relative font-medium active:gradient-text font-bold"
          >
            Home
          </Link>
          <a
            href="#reviews"
            className="text-white/80 hover:gradient-text px-1.5 py-0.5 transition-all relative font-medium"
          >
            Reviews
          </a>
          <a
            href="mailto:info@curatedstore.com"
            className="bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white font-semibold rounded-full shadow-2xl px-5 py-2 text-base transition-transform hover:scale-105 focus-visible:ring-2 ring-fuchsia-300 ml-3"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Discover Amazing Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Carefully curated items that meet our highest standards of quality and design
        </p>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sampleItems.map((item) => (
            <Link
              key={item.id}
              to={`/item/${item.id}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    ${item.price}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Curated Store</h3>
          <p className="text-gray-400 mb-6">
            Your trusted source for premium products
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Curated Store. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
