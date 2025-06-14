
import { Link } from "react-router-dom";

const Index = () => {
  const sampleItems = [
    {
      id: 1,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image: "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image: "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image: "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image: "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Sample",
      description: "this item is a sample",
      price: 999,
      image: "https://images.unsplash.com/photo-1745874864678-f464940bb513?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Curated Store
          </h1>
          <p className="text-center text-gray-600 mt-2">Premium Quality Products</p>
        </div>
      </header>

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
          <p className="text-gray-400 mb-6">Your trusted source for premium products</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Curated Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
