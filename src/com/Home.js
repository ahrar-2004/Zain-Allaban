import React from 'react';
import { IceCream, Smile, ThumbsUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#113F67] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to ZAIN ALLABAN</h1>
          <p className="text-lg mb-6">Delicious, handcrafted ice cream that melts your heart.</p>
          <Link
            to="/contact"
            className="inline-block bg-[#FDF5AA] text-[#113F67] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#eae28e] transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#113F67] mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            <div>
              <IceCream className="mx-auto h-10 w-10 text-[#34699A]" />
              <h3 className="text-xl font-semibold mt-4">Fresh Flavors</h3>
              <p className="mt-2 text-gray-600">Always made from the finest ingredients.</p>
            </div>
            <div>
              <Smile className="mx-auto h-10 w-10 text-[#34699A]" />
              <h3 className="text-xl font-semibold mt-4">Family Friendly</h3>
              <p className="mt-2 text-gray-600">Fun treats for all age groups.</p>
            </div>
            <div>
              <ThumbsUp className="mx-auto h-10 w-10 text-[#34699A]" />
              <h3 className="text-xl font-semibold mt-4">Trusted Quality</h3>
              <p className="mt-2 text-gray-600">Loved by our community in every scoop.</p>
            </div>
            <div>
              <Star className="mx-auto h-10 w-10 text-[#34699A]" />
              <h3 className="text-xl font-semibold mt-4">Top Rated</h3>
              <p className="mt-2 text-gray-600">Reviewed and rated by our loyal customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-[#113F67] mb-10">Gallery</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"].map((pic, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
        >
          <img
            src={`/${pic}`}
            alt={`Ice Cream ${index + 1}`}
            className="w-full h-64 object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-[#58A0C8] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Scoop Happiness Together!</h2>
          <p className="text-lg mb-6">Visit us or connect online to taste the magic of ZAIN ALLABAN.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-[#113F67] px-6 py-3 rounded-full font-medium shadow hover:bg-[#f4f4f4]"
            >
              Contact Now
            </Link>
            <a
              href="https://www.facebook.com/share/1CTJhMUS5u/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FDF5AA] text-[#113F67] px-6 py-3 rounded-full font-medium shadow hover:bg-[#eae28e]"
            >
              Visit Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
