
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
  description: string;
  information: string;
  price: number;
  image: string;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);

  // This can also be fetched from a file or API
  const reviews: Review[] = [
    {
      id: 1,
      name: "John D.",
      rating: 5,
      comment: "Amazing quality! Exactly as described and arrived quickly.",
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Sarah M.",
      rating: 5,
      comment: "Love this product! Great value for money.",
      date: "2024-01-10"
    },
    {
      id: 3,
      name: "Mike R.",
      rating: 4,
      comment: "Good quality, would recommend to others.",
      date: "2024-01-05"
    }
  ];

  useEffect(() => {
    if (id) {
      fetch("/items.json")
        .then((res) => res.json())
        .then((items: Item[]) => {
          const foundItem = items.find((i) => i.id === parseInt(id));
          setItem(foundItem || null);
        })
        .catch((err) => console.error("Failed to fetch item:", err));
    }
  }, [id]);

  const handleBuyClick = () => {
    if (item) {
      window.open('https://wa.me/1234567890?text=Hi, I am interested in buying the ' + item.name, '_blank');
    }
  };

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Store
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Product Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-xl">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{item.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{item.description}</p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Information</h3>
                <p className="text-gray-700 leading-relaxed">{item.information}</p>
              </div>

              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl font-bold text-green-600">${item.price}</span>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">(4.8/5)</span>
                </div>
              </div>

              <button 
                onClick={handleBuyClick}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                Contact to Buy
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Customer Reviews</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{review.comment}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 fill-current mr-2" />
              <span className="font-semibold">4.8/5 Average Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
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

export default ItemPage;
