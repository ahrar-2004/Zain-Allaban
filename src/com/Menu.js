import React, { useState } from 'react';
import { Star, Heart, Award, Search } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items', count: 24 },
    { id: 'premium', name: 'Premium', count: 8 },
    { id: 'classic', name: 'Classic', count: 10 },
    { id: 'seasonal', name: 'Seasonal', count: 6 }
  ];

  const menuItems = [
    { id: 1, name: 'Vanilla Dream', category: 'classic', price: 25, description: 'Rich Madagascar vanilla with premium cream', image: '', popular: true, rating: 4.8 },
    { id: 2, name: 'Chocolate Bliss', category: 'classic', price: 28, description: 'Belgian dark chocolate with cocoa chunks', image: '', popular: true, rating: 4.9 },
    { id: 3, name: 'Pistachio Royale', category: 'premium', price: 45, description: 'Authentic Middle Eastern pistachios with rose water', image: '', premium: true, rating: 4.7 },
    { id: 4, name: 'Strawberry Fields', category: 'classic', price: 30, description: 'Fresh strawberries with cream swirls', image: '', rating: 4.6 },
    { id: 5, name: 'Saffron Luxury', category: 'premium', price: 55, description: 'Premium saffron with cardamom and almonds', image: '', premium: true, rating: 4.9 },
    { id: 6, name: 'Mango Tango', category: 'seasonal', price: 35, description: 'Tropical mango with coconut flakes', image: '', seasonal: true, rating: 4.5 },
    { id: 7, name: 'Cookies & Cream', category: 'classic', price: 32, description: 'Crushed cookies in vanilla cream base', image: '', popular: true, rating: 4.8 },
    { id: 8, name: 'Date & Walnut', category: 'premium', price: 48, description: 'Medjool dates with roasted walnuts', image: '', premium: true, rating: 4.6 },
    { id: 9, name: 'Mint Chocolate Chip', category: 'classic', price: 30, description: 'Fresh mint with dark chocolate chips', image: '', rating: 4.7 },
    { id: 10, name: 'Rosewater Delight', category: 'seasonal', price: 38, description: 'Delicate rose with honey and pistachios', image: '', seasonal: true, rating: 4.4 },
    { id: 11, name: 'Caramel Swirl', category: 'classic', price: 33, description: 'Salted caramel ribbons in vanilla base', image: '', popular: true, rating: 4.8 },
    { id: 12, name: 'Lavender Honey', category: 'seasonal', price: 42, description: 'French lavender with wildflower honey', image: '', seasonal: true, rating: 4.3 }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <header className="bg-blue-50 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0028F5] mb-4">Our Menu</h1>
          <p className="text-lg text-gray-700">Delicious, handcrafted ice cream made with the finest ingredients.</p>
        </div>
      </header>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search flavors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0028F5] focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center md:justify-start">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat.id
                    ? 'bg-[#0028F5] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition">
              <div className="h-48 bg-blue-100 flex items-center justify-center relative">
                <span className="text-6xl opacity-10">🍨</span>
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.popular && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Popular
                    </span>
                  )}
                  {item.premium && (
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Award className="w-3 h-3" /> Premium
                    </span>
                  )}
                  {item.seasonal && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Heart className="w-3 h-3" /> Seasonal
                    </span>
                  )}
                </div>
                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {item.rating}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-[#0028F5] font-bold">AED {item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button className="w-full bg-[#0028F5] text-white py-2 rounded-lg hover:bg-blue-700 transition shadow-md">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center mt-16">
            <div className="text-5xl opacity-20 mb-4">🔍</div>
            <p className="text-gray-700 text-lg">No items found. Try a different search or filter.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl text-[#0028F5] font-semibold mb-2">Can’t find your favorite?</h2>
        <p className="text-gray-600 mb-6">We also take custom orders for events, parties, and special cravings.</p>
        <a
          href="/contact"
          className="inline-block bg-[#0028F5] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Menu;
